"use client";

import { useState } from "react";
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
import { Gift, CreditCard, MapPin, Copy, Send } from "lucide-react";

export function GiftRsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attendance: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP submitted:", formData);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    console.log(`${type} copied to clipboard`);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
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
          {/* Bank Transfer */}
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
                onClick={() => copyToClipboard("1234567890", "Nomor rekening")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Rekening
              </Button>
            </CardContent>
          </Card>

          {/* Physical Gift */}
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
                    "Wedelan Rt 1 Rw 11, Bangsri, Jepara, Jawa Tengah 59453",
                    "Alamat"
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

        {/* RSVP Form */}
        <Card className="bg-card border border-border shadow-lg">
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
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
