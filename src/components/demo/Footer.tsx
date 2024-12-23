import { Heart } from 'lucide-react'

export function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground py-[100px] px-10 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Trung Hiếu & Lê Khuyên</h3>
              <p className="mt-2">Mãi Mãi & Mãi Mãi</p>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              <p>Ngày 01 Tháng 01 Năm 2025</p>
            </div>
            <div className="flex flex-col items-center mt-4  md:mt-0">
              <p>&copy; 2025 Trung Hiếu & Lê Khuyên</p>
              <p>
                Created by 🚀
                <a
                  href="https://zalo.me/0347754069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @Lê Thanh Tùng
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}