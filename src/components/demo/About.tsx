import { irfan, is2 } from "@/assets"

export function About() {
    return (
      <section id="about" className="py-12 font-primary">
        <h2 className="text-4xl font-bold text-center mb-2"></h2>
        <div className="flex justify-center mb-8">
          {/* You can add your decorative element here if needed */}
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={irfan}
                  alt="Irfan"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-secondary mt-4">Trung Hiếu</h3>
          </div>
          <div className="text-center font-tertiary">
            <p className="mb-4">
              "Trăm triệu hạt mưa rơi, không hạt nào rơi nhầm chỗ. Tất cả người
              ta từng gặp, không một người ngẫu nhiên". Ta gặp nhau, rồi yêu
              nhau, tất cả như là một sự sắp đặt của số phận. Đó là cảm giác kỳ
              diệu khi gặp một người mà bạn chưa từng quen, nhưng lại thấy như
              đã thân thuộc từ lâu.
            </p>
            <p className="mb-4">
              Định mệnh đưa ta về bên nhau, rồi từ đó chúng ta cùng nhau bước
              tiếp trên con đường chung. Không phải vì mọi thứ đều êm đềm, bởi
              hành trình nào cũng có những ngày nắng đẹp xen lẫn những cơn giông
              bão. Nhưng chỉ cần chúng ta cùng nắm tay, cùng yêu thương nhiều
              hơn mỗi ngày, bao dung với những khuyết điểm của nhau, thì những
              vết gợn đó sẽ trở thành động lực để ta cố gắng hoàn thiện và ngày
              càng thấu hiểu nhau. Và rồi, ta sẽ cùng nhau bước qua những chặng
              đường mà trước đây ta chưa từng nghĩ tới
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={is2}
                  alt="Bride"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-secondary mt-4">Lê Khuyên</h3>
          </div>
        </div>
      </section>
    );
}