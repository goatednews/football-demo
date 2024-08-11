import { NextRequest, NextResponse } from 'next/server';
import cv from 'opencv4nodejs';
import sharp from 'sharp';
import fs from 'fs';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { imageSrc } = await req.json();
    
    // Load the image from file or URL
    const imageBuffer = fs.readFileSync(imageSrc); // Assuming imageSrc is a local file path
    
    // Decode the image with sharp
    const img = sharp(imageBuffer);
    const buffer = await img.raw().toBuffer();
    
    const mat = cv.matFromArray(buffer, cv.CV_8UC3);
    
    // Convert the image to grayscale
    const gray = new cv.Mat();
    cv.cvtColor(mat, gray, cv.COLOR_RGBA2GRAY);
    
    // Apply threshold to get a binary image
    const dst = new cv.Mat();
    cv.threshold(gray, dst, 200, 255, cv.THRESH_BINARY_INV);
    
    // Find contours
    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();
    cv.findContours(dst, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    
    // Draw contours on the original image
    for (let i = 0; i < contours.size(); i++) {
      const color = new cv.Vec(0, 255, 0);
      cv.drawContours(mat, contours, i, color, 2, cv.LINE_8, hierarchy, 100);
    }
    
    // Convert the processed image back to a buffer
    const outBuffer = sharp(mat.getData(), {
      raw: {
        width: mat.cols,
        height: mat.rows,
        channels: mat.channels(),
      },
    }).png().toBuffer();
    
    // Convert buffer to base64 data URL
    const processedImageUrl = `data:image/png;base64,${outBuffer.toString('base64')}`;
    
    // Cleanup
    mat.delete();
    dst.delete();
    gray.delete();
    contours.delete();
    hierarchy.delete();
    
    // Return the processed image
    return NextResponse.json({ processedImageUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
