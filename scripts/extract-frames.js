const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegStatic);

const inputPath = 'public/assets/videos/hero.mp4';
const outputDir = 'public/assets/hero-sequence/';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Starting frame extraction for ${inputPath} to ${outputDir}`);

// Extract exactly 200 frames from the entire video duration
// If video is say 10 seconds, we need 20fps to get 200 frames. But fluent-ffmpeg is easier: 
// we simply ask for 200 frames total.
ffmpeg(inputPath)
    .outputOptions([
        '-vf', 'scale=-1:1080',
        '-vframes', '200'
    ])
    .output(`${outputDir}frame_%03d.jpg`)
    .on('end', () => {
        console.log('Frame extraction finished successfully');
    })
    .on('error', (err) => {
        console.error('Error extracting frames:', err);
    })
    .run();
