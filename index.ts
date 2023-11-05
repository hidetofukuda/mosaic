// https://github.com/Dellos7/mosaic-node-generator/tree/master
var mosaic = require("mosaic-node-generator");
// import * as mosaic from "mosaic-node-generator";
import * as ffmpeg from "fluent-ffmpeg";
// import { exec, execSync } from 'child_process';

const materialGazoPath = "imput.mp4";
const baseGazoPath = "aaa";
const materialMoviePath = "";
const outputGazoPath = "outputGazoPath";

class HelloWorld {
  constructor(public displayText: string) {}

  greet() {
    const materialGazoPath = "";
    const baseGazoPath = "aaa";

    mosaic.mosaic(baseGazoPath, materialGazoPath);
    return this.displayText;
  }
}

class SplitMovieToImage {
  constructor(public input1: string, input2: string, input3: string) {}

  split() {
    ffmpeg(materialMoviePath)
      .outputOptions(["-vf", "fps=5"]) // 1秒ごとにフレームを抽出
      .on("end", () => {
        console.log("画像の抽出が完了しました。");
      })
      .on("error", (err: string) => {
        console.error("エラーが発生しました:", err);
      })
      .save("output.jpeg");
  }
}

var helloWorld = new HelloWorld("helloworld");
