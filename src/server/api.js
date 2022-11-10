import axios, { get } from "axios";
import { load } from "cheerio";

export function setData(routing, url) {
  return axios.get(`http://127.0.0.1:3000/courts/${routing}/${url}`, {
      responseType: "arraybuffer",
      responseEncoding: "REFUSEDbinary",
    }).then((response) => {
      let u8arr = new Uint8Array(response.data);
      let decoder = new TextDecoder("windows-1251");
      let text = decoder.decode(u8arr);
      const $ = load(text);
  let selectTime;
  let selectCategory;
  let selectJudge;
  let selectNumber;
  let objectData = {};
  selectTime = $("#tablcont").find("td:nth-child(3)").map(function(){
  return $(this).text();
  }).toArray();
  selectCategory = $("#tablcont").find("td:nth-child(5)").map(function(){
    return $(this).text();
  }).toArray();
  selectJudge = $("#tablcont").find("td:nth-child(6)").map(function(){
    return $(this).text();
  }).toArray();
  selectNumber = $("#tablcont").find("td:nth-child(2)").map(function(){
    return $(this).text();
  }).toArray();
  if(selectTime.length !== 0){
    objectData.time = selectTime;
  }
  if(selectCategory.length !== 0){
    objectData.category = selectCategory;
  }
  if(selectJudge.length !== 0){
    objectData.judge = selectJudge;
  }
  if(selectNumber.length !== 0){
    objectData.number = selectNumber;
  }
 return objectData;
    });
}


