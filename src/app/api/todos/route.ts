const list = ["Todo 1", "Todo 2", "Todo 3"];

export async function GET() {
  await new Promise((r) => setTimeout(r, 100));

  return Response.json(list);
}

export async function POST(req: Request) {
  const { item } = await req.json();

  if (item && !list.includes(item)) {
    list.push(item);
  }

  return Response.json(list);
}
