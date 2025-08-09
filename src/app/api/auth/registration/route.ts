import { NextResponse } from "next/server";
import { generateToken, hashPassword } from "@/shared";
import { connectDB } from "@/shared/lib/mongoose";
import { RegistrationValid } from "@/feature/auth";
import { IUser, User } from "@/entity/user/model/user.model";

export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();

  const parsed = RegistrationValid.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.message },
      { status: 400 }
    );
  }
  //maybe add check user email
  body.password = await hashPassword(body.password)
  const newUser = await User.create(body) as IUser;

  if (!newUser) {
    return NextResponse.json(
      { errors: "Error create user" },
      { status: 400 }
    );
  }
  const token = await generateToken({ id: newUser._id.toString() })

  const response = NextResponse.json({ message: true }, { status: 201 });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    sameSite: 'none',
  });

  return response;

}

