import { CreateNumDto } from "./dtos/example.dto";
import { Num } from "./entities/example.entity";
import { BadRequest } from "http-errors";

export async function create(data: CreateNumDto) {
  data.num = data.num ? data.num : Math.random() >= 0.5 ? 1 : 0;
  if(data.num === 0){
    throw new BadRequest("Bad request");
  }
  const number = new Num({ num: data.num });
  await number.save();
  return number;
}
