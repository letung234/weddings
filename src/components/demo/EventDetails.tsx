
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { MapPinIcon, ClockIcon, CalendarIcon, GlassesIcon, MusicIcon } from "lucide-react"
import { LocationMap } from "@/components/demo/LocationMap" // Import komponen peta

export function EventDetails() {

    const events = [
      {
        id: "ceremony",
        title: "Nhà Trai",
        date: "Ngày 01 Tháng 01 Năm 2025",
        time: "9:00 AM - 10:00 AM",
        venue: "Nhà Bà Nguyễn Thị Hà",
        address: "Xóm Minh Trung, Thôn Đa Phúc, Huyện Quốc Oai, TP.Hà Nội",
        details:
          "Hãy cùng chúng tôi chứng kiến khoảnh khắc thiêng liêng khi trao lời thề ước và bắt đầu hành trình hạnh phúc bên nhau.",
        icon: <GlassesIcon className="w-6 h-6 text-primary" />,
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3549.696860410821!2d105.64599227525646!3d21.021795280625767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzE4LjUiTiAxMDXCsDM4JzU0LjgiRQ!5e1!3m2!1sen!2s!4v1734767812424!5m2!1sen!2s",
      },
      {
        id: "Nhà Gái",
        title: "Nhà Gái",
        date: "Ngày 31 Tháng 12 Năm 2024",
        time: "16:00 PM - 17:00 PM",
        venue: "Số Nhà 22(Sân Bắn - Đồi Dền)",
        address:
          "Xóm Đồi, Thôn Làng Kim 1, Xã Kim Quan, Huyện Thạch Thất, TP.Hà Nội",
        details:
          "Hãy đến và cùng chúng tôi chứng kiến khoảnh khắc trọng đại, nơi tình yêu thăng hoa và chúng tôi chính thức bước vào hành trình hạnh phúc bên nhau.",
        icon: <MusicIcon className="w-6 h-6 text-primary" />,
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.468456949567!2d105.57169937389719!3d21.044096200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313459f285148797%3A0xd0aadaf8a4842ff5!2zS2ltIFF1YW4sIFRo4bqhY2ggVGjhuqV0LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1734767022524!5m2!1svi!2s",
      },
    ];

    return (
      <section
        id="event-details"
        className="py-12 px-4 max-w-7xl mx-auto  "
        style={{
          backgroundImage: "url(../../../src/assets/img/bgweding.jpeg')",
        }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Chi tiết sự kiện
        </motion.h2>

        <p className="text-lg text-muted-foreground mb-10 text-center">
          Chúng tôi chờ đợi để cùng bạn chúc mừng!<br/>
          "Bữa tiệc của chúng tôi sẽ chọn vẹn hơn khi có lời chúc phúc và hiện diện của Quý khách!"

        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    {event.icon}
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                    <p>{event.date}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <ClockIcon className="w-5 h-5 text-muted-foreground" />
                    <p>{event.time}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                    <p>{event.venue}</p>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {event.address}
                  </p>
                  <p className="mt-2 italic h-20">{event.details}</p>

                  <div className="mt-4">
                    <LocationMap mapSrc={event.mapSrc} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        </motion.div>
      </section>
    );
}
