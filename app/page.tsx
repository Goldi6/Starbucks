
//'use client'
import Main from "@/components/Main";


async function getData() {
  const res = await fetch('http://localhost:3000/api')
  if (!res.ok) throw new Error(res.statusText)
  const data = await res.json();
  return data;
}

export default async function Home() {
  //server side fetching and rendering
  const data = await getData();

  return (
    <>
      <Main content={data} />
    </>
  );
}

