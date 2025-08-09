import { NextResponse } from "next/server";
import { User } from "@/entity/user/model/user.model";
import { comparePassword, generateToken, hashPassword } from "@/shared";
import { connectDB } from "@/shared/lib/mongoose";
import { LoginValid } from "@/feature/auth";


export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();

  const parsed = LoginValid.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.message },
      { status: 400 }
    );
  }
  const user = await User.findOne({
    email: body.email
  })
  if (!user) {
    return NextResponse.json(
      { errors: "Invalid credentials" },
      { status: 400 }
    );
  }
  if (!(await comparePassword(body.password, user.password))) {
    return NextResponse.json(
      { errors: "Invalid credentials" },
      { status: 400 }
    );
  }

  const token = await generateToken({ id: user._id.toString() })

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
