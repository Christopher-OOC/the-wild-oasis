import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("Cabins cound not be loaded!");
    throw new Error("Cabins cound not be loaded!");
  }

  return data;
}
