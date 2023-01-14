import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvReader);

matchReader.load();

let manUtdWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man United Wins:: ${manUtdWins}`);
