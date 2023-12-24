export default function Hero() {
  return (
    <main className="flex flex-row gap-[5vw] h-[calc(100vh-100px)] border">
      <div className="flex flex-col gap-10 font-semibold border pt-28 ml-[8vw]">
        <h3 className="text-[30px] text-purple-800">HICHAM DIAB</h3>
        <h1 className="text-[88px] text-slate-300">
          Web developer and UI designer
        </h1>
      </div>

      <div className="w-[80%] border border-red-500 ">
        <img
          className="object-cover w-full h-full overflow-visible"
          src="/hero_hich.png"
          alt=""
        />
      </div>
    </main>
  );
}
