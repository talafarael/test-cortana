import { User } from "@/entity/user/model/user.model";
import { getUserIdFromRequest } from "@/shared"
import { connectDB } from "@/shared/lib/mongoose";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectDB();
  const id = await getUserIdFromRequest(request)
  if (!id) {
    return NextResponse.json(
      { errors: "Unauthorized" },
      { status: 401 }
    );
  }
  const user = await User.findOne({ _id: new Types.ObjectId(id) })

  if (!user) {
    return NextResponse.json(
      { errors: "User not found" },
      { status: 404 }
    );
  }
  return NextResponse.json({ user }, { status: 201 });
}
