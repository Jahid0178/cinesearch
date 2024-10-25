import {MovieType} from "@/typescript/types";

const watchlists: MovieType[] = [];

export async function GET() {
  return Response.json({message: "All watchlists", count: watchlists.length, data: watchlists}, {status: 200});
}

export async function POST(request: Request) {
  const data: MovieType = await request.json();

  const existingWatchlist: MovieType | undefined = watchlists.find((watchlist: MovieType) => watchlist.id === data.id);

  if (existingWatchlist) {
    return Response.json({message: "Watchlist already exists"}, {status: 409});
  }

  watchlists.push(data);

  return Response.json({message: "Watchlist created", count: watchlists.length, data: watchlists}, {status: 201});
}

export async function DELETE(request: Request) {
  const data: MovieType = await request.json();

  const existingWatchlist: MovieType | undefined = watchlists.find((watchlist: MovieType) => watchlist.id === data.id);

  if (!existingWatchlist) {
    return Response.json({message: "Watchlist not found"}, {status: 404});
  }

  watchlists.splice(watchlists.findIndex((watchlist: MovieType) => watchlist.id === data.id), 1);

  return Response.json({message: "Watchlist deleted", count: watchlists.length, data: watchlists}, {status: 200});
}