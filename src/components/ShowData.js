import { useEffect, useState } from "react";
import axios from "axios";

function ShowData() {
  const [data, setData] = useState();

  const fetchRecord = async () => {
    try {
      const response = await fetch(
        "https://dev-telegrambot-flashloan.kryptomind.net/logs"
      );
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        result += decoder.decode(value, { stream: true });
      }
      //   console.log("RESULT ", result);
      setData(result);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  useEffect(() => {
    if (data) {
      const resultArray = data.split(/-+\n/);

      // console.log(resultArray);
      let matching = [];
      if (resultArray.length) {
        for (let i = 0; i < resultArray.length; i++) {
          const line = resultArray[i].trim();
          if (line.includes("_profitInBaseTokenAfterGas: true")) {
            matching.push(line);
          }
        }
      }

      console.log("Matching ", matching);
    }
  }, []);

  return <h1>Show data</h1>;
}

export default ShowData;
