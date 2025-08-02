import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return new Response("Unauthorized", { status: 401 });

    const { title, phases } = await req.json();
    const project = new Project({
      userEmail: session.user.email, // Store by email
      title,
      phases,
    });

    await project.save();
    return new Response(JSON.stringify(project), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error creating project", { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return new Response("Unauthorized", { status: 401 });

    const projects = await Project.find({ userEmail: session.user.email });
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error fetching projects", { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return new Response("Unauthorized", { status: 401 });

    const { projectId, title, phases } = await req.json();
    const updateData = {};
    if (title) updateData.title = title;
    if (phases) updateData.phases = phases;

    await Project.findOneAndUpdate(
      { _id: projectId, userEmail: session.user.email },
      updateData
    );

    return new Response("Project updated", { status: 200 });
  } catch (err) {
    return new Response("Error updating project", { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return new Response("Unauthorized", { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await Project.findOneAndDelete({
      _id: id,
      userEmail: session.user.email,
    });

    return new Response("Project deleted", { status: 200 });
  } catch (err) {
    return new Response("Error deleting project", { status: 500 });
  }
}
