"use client";

import { useState, useEffect } from "react";
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

// Definisikan tipe data untuk objek RSVP
interface RsvpData {
  id: string;
  name: string;
  message: string;
  attendance: string | null;
  createdAt: string;
}

export function GiftRsvpSection() {
  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attendance: "",
  });
  // State untuk daftar RSVP dari database
  const [rsvps, setRsvps] = useState<RsvpData[]>([]);
  // State untuk loading saat mengambil data awal
  const [isLoading, setIsLoading] = useState(true);
  // State untuk loading saat submit form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fungsi untuk mengambil data RSVP dari API
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

  // Ambil data saat komponen pertama kali dimuat
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
      // Tambahkan RSVP baru ke atas daftar tanpa refresh
      setRsvps([newRsvp, ...rsvps]);
      // Kosongkan form
      setFormData({ name: "", message: "", attendance: "" });
      toast.success("Ucapan dan doa Anda telah terkirim!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Gagal mengirim ucapan");
    } finally {
      setIsSubmitting(false);
    }
  };

  // PERUBAHAN: Fungsi ini sekarang menerima parameter `duration`
  const copyToClipboard = (text: string, duration: number) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Berhasil disalin", {
        duration: duration, // Gunakan durasi dari parameter
      });
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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Bagian Kutipan */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="bg-card border border-border shadow-lg">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
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
                (HR. Abu Daud no. 2130, disahihkan Al Albani dalam Shahih Abu
                Daud)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bagian Wedding Gift */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">
            Wedding Gift
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin
            memberikan tanda kasih untuk kami, dapat melalui:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border border-border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-xl text-primary">
                <CreditCard className="w-6 h-6" />
                Transfer Bank
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Bank BNI</p>
                <p className="text-lg font-mono font-bold text-card-foreground">
                  1795545689
                </p>
                <p className="text-sm text-muted-foreground">MUHAMMAD FARIL</p>
              </div>
              <Button
                onClick={() => copyToClipboard("1795545689", 2000)}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Rekening
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-card border border-border shadow-lg">
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
                <p className="text-sm text-card-foreground leading-relaxed">
                  Ds.Banjaragung RT 04 RW 05
                  <br />
                  Kec. Bangsri Kab. Jepara
                  <br />
                  Jawa Tengah 59453
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
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Alamat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Form RSVP */}
        <Card className="bg-card border border-border shadow-lg mb-12">
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
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-foreground mb-2"
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
                  className="block text-sm font-medium text-card-foreground mb-2"
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
        </Card>

        {/* Daftar Ucapan RSVP */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif text-primary text-center">
            Daftar Ucapan
          </h3>
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
                className="bg-card border border-border shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-card-foreground">
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
                      <p className="text-card-foreground whitespace-pre-wrap">
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
