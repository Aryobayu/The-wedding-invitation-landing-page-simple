export function ClosingSection() {
  return (
    <section className="py-20 px-4 text-center bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <p className="text-lg text-muted-foreground mb-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>
          <p className="text-lg text-muted-foreground">
            Atas kehadiran dan doa restu, kami ucapkan terima kasih.
          </p>
        </div>

        <div>
          <p className="text-xl font-serif text-primary mb-2">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="text-2xl md:text-3xl font-serif text-primary font-bold mt-8 mb-4">
            Kami yang Berbahagia,
          </p>
          <h3 className="text-4xl md:text-6xl font-serif text-secondary font-extrabold tracking-tight">
            Santi & Faril
          </h3>
        </div>

        <div className="text-muted-foreground text-sm">
          <p className="font-semibold">Turut Mengundang:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
            <div>
              <p className="font-medium">Kel. Besar Bapak Alm. Satrio</p>
              <p className="font-medium">Kel. Besar Ibu Rohmatun</p>
            </div>
            <div>
              <p className="font-medium">Kel. Besar Bapak Ahmad Syuhada'</p>
              <p className="font-medium">Kel. Besar Ibu Nur Hidayah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
