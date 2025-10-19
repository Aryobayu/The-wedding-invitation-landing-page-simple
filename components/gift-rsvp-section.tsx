'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Gift, CreditCard, Copy, Send, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

interface RsvpData {
  id: string;
  name: string;
  message: string;
  attendance: string | null;
  createdAt: string;
}

export function GiftRsvpSection() {
  const [formData, setFormData] = useState({ name: "", message: "", attendance: "" });
  const [rsvps, setRsvps] = useState<RsvpData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchRsvps = async () => {
    try {
      const response = await fetch("/api/rsvp");
      const data = await response.json();
      setRsvps(data);
    } catch (error) {
      console.error("Failed to fetch RSVPs", error);
      toast.error("Gagal memuat ucapan");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRsvps();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      toast.warning("Nama dan ucapan tidak boleh kosong");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit");
      const newRsvp = await response.json();
      setRsvps([newRsvp, ...rsvps]);
      setFormData({ name: "", message: "", attendance: "" });
      toast.success("Ucapan dan doa Anda telah terkirim!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Gagal mengirim ucapan");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, duration: number) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Berhasil disalin", { duration });
    });
  };

  const AttendanceIcon = ({ status }: { status: string | null }) => {
    switch (status) {
      case "hadir":
        return <span title="Hadir">✔️</span>;
      case "tidak-hadir":
        return <span title="Tidak Hadir">❌</span>;
      default:
        return <span title="Belum dikonfirmasi">❓</span>;
    }
  };

  return (
    <section className="py-20 px-4 bg-dusty-blue-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Bagian Kutipan */}
        <AnimateOnScroll className="max-w-3xl mx-auto mb-20">
          <Card className="bg-card border-stone-200 shadow-lg text-center overflow-hidden">
            <CardContent className="p-8 md:p-12 space-y-6">
                <Image src="/ornaments/Ornamenst dominan gold/divider-abstract-gold-curve-01.png" alt="Ornamen Pembatas Atas" width={200} height={50} className="mx-auto opacity-80" />
              <p
                className="text-2xl md:text-3xl font-serif text-primary leading-relaxed"
                dir="rtl"
              >
                بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي
                خَيْرٍ
              </p>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Semoga Allah memberkahkan padamu dan mengumpulkan kalian berdua
                dalam kebaikan."
              </p>
              <p className="text-sm text-muted-foreground/80">
                (HR. Abu Daud no. 2130)
              </p>
               <Image src="/ornaments/Ornamenst dominan gold/divider-abstract-gold-curve-01.png" alt="Ornamen Pembatas Bawah" width={200} height={50} className="mx-auto opacity-80 transform rotate-180" />
            </CardContent>
          </Card>
        </AnimateOnScroll>

        {/* Bagian Wedding Gift */}
        <AnimateOnScroll delay={0.1} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold mb-4">
            Wedding Gift
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih, dapat melalui:
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="relative bg-card border-stone-200 shadow-lg overflow-hidden">
             <Image src="/ornaments/Ornamenst dominan blue/bouquet-watercolor-blue-detailed.png" alt="Ornamen Kartu" width={150} height={150} className="absolute -bottom-8 -left-10 opacity-20 dark:opacity-30" />
            <div className="relative z-10">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl text-primary">
                  <CreditCard className="w-6 h-6" />
                  Transfer Bank
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Bank BNI</p>
                  <p className="text-lg font-mono font-bold text-foreground">
                    1795545689
                  </p>
                  <p className="text-sm text-muted-foreground">a.n. MUHAMMAD FARIL</p>
                </div>
                <Button
                  onClick={() => copyToClipboard("1795545689", 2000)}
                  variant="outline"
                  className="w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Rekening
                </Button>
              </CardContent>
            </div>
          </Card>
          <Card className="relative bg-card border-stone-200 shadow-lg overflow-hidden">
            <Image src="/ornaments/Ornamenst dominan blue/bouquet-watercolor-blue-detailed.png" alt="Ornamen Kartu" width={150} height={150} className="absolute -bottom-8 -right-10 opacity-20 dark:opacity-30" />
            <div className="relative z-10">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl text-primary">
                  <Gift className="w-6 h-6" />
                  Kirim Kado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Alamat Pengiriman:
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Ds.Banjaragung RT 04 RW 05
                    <br />
                    Kec. Bangsri Kab. Jepara, 59453
                  </p>
                </div>
                <Button
                  onClick={() =>
                    copyToClipboard(
                      "Ds.Banjaragung RT 04 RW 05 Kec. Bangsri Kab. Jepara. Jawa Tengah 59453",
                      2000
                    )
                  }
                  variant="outline"
                  className="w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Alamat
                </Button>
              </CardContent>
            </div>
          </Card>
        </AnimateOnScroll>

        {/* Form RSVP */}
        <AnimateOnScroll delay={0.1}>
          <Card className="relative bg-card border-stone-200 shadow-lg mb-12 overflow-hidden">
            <Image src="/ornaments/Ornamenst dominan blue/corner-watercolor-blue-01.png" alt="Ornamen RSVP" width={200} height={200} className="absolute -top-12 -left-16 opacity-20 dark:opacity-30" />
            <div className="relative z-10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-serif text-primary">
                  RSVP
                </CardTitle>
                <p className="text-muted-foreground">Ucapan Selamat & Do'a</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Tuliskan nama Anda di sini..."
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ucapan & Doa
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Berikan ucapan dan doa terbaik untuk kami..."
                      rows={4}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="attendance"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Konfirmasi Kehadiran
                    </label>
                    <Select
                      value={formData.attendance}
                      onValueChange={(value) =>
                        setFormData({ ...formData, attendance: value })
                      }
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih konfirmasi kehadiran" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hadir">Hadir</SelectItem>
                        <SelectItem value="tidak-hadir">Tidak Hadir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Mengirim..." : "Kirim"}
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </AnimateOnScroll>

        {/* Daftar Ucapan RSVP */}
        <div className="space-y-6">
          <AnimateOnScroll>
            <h3 className="text-2xl md:text-3xl font-serif text-primary text-center">
              Daftar Ucapan
            </h3>
          </AnimateOnScroll>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          ) : rsvps.length > 0 ? (
            rsvps.map((rsvp) => (
              <Card
                key={rsvp.id}
                className="bg-card/80 border-stone-200 shadow-sm backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-foreground">
                          {rsvp.name}
                        </h4>
                        <AttendanceIcon status={rsvp.attendance} />
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {format(
                          new Date(rsvp.createdAt),
                          "dd MMMM yyyy, HH:mm",
                          { locale: id }
                        )}
                      </p>
                      <p className="text-foreground whitespace-pre-wrap">
                        {rsvp.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
