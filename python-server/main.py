from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from PIL import Image
import io
import base64

app = FastAPI()

# Add CORS middleware
origins = [
    "http://localhost:3000",  # React frontend URL
    "http://127.0.0.1:3000",  # Alternative localhost URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/generate")
async def generate_image(file: UploadFile = File(...)):
    try:
        # Read image data from file
        image_data = await file.read()

        # Convert to numpy array
        nparr = np.frombuffer(image_data, np.uint8)

        # Decode image using OpenCV
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Convert image to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Apply threshold to get a binary image
        _, binary = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)

        # Find contours
        contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        # Draw contours on the original image
        cv2.drawContours(img, contours, -1, (0, 255, 0), 2)

        # Convert back to PIL Image to return as a response
        pil_img = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))

        # Save processed image to a byte buffer
        buf = io.BytesIO()
        pil_img.save(buf, format="PNG")
        byte_im = buf.getvalue()

        # Convert byte data to base64 encoded string
        encoded_image = f"data:image/png;base64,{base64.b64encode(byte_im).decode()}"

        return JSONResponse(content={"processedImageUrl": encoded_image})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
