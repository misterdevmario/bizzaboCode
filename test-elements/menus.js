async function getDinningTuesday() {
  const res = await fetch(`http://127.0.0.1:1337/api/diningtuesdays`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data =await res.json();
  console.log(data.data.map(i => i.attributes.menus[0]));
}
getDinningTuesday();
