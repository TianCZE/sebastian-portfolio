import Image from 'next/image'

export default function Frame({ data }: { data: any }) {
  return (
    <>
      <Image
        alt=""
        src={data.image}
        height={500}
        width={500}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{data.title}</h3>
        <p>Taken by {data.description}</p>
      </div>
    </>
  )
}