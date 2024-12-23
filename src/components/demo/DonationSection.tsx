
import {qrt, qrg} from "@/assets";
export function DonationSection() {
    const qrisData = qrt;

    return (
      <section id="donate" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Gửi Qùa Cưới</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Nhà Trai */}
          <div className="flex-1 text-center">
            <h4 className="text-xl font-semibold mb-4">Nhà Trai</h4>
            <div className="flex justify-center">
              <img src={qrisData} alt="" className="h-56" />
            </div>
            <p className="mt-2 text-sm">
              Ngân hàng: TPBank
              <br />
              Số tài khoản: 04218515301
              <br />
              NGUYEN TRUNG HIEU
            </p>
          </div>
          {/* Nhà Gái */}
          <div className="flex-1 text-center">
            <h4 className="text-xl font-semibold mb-4">Nhà Gái</h4>
            <div className="flex justify-center">
              <img src={qrg} alt="" className="h-56" />
            </div>
            <p className="mt-2 text-sm">
              Ngân hàng: VIBBank
              <br />
              Số tài khoản: 125121998
              <br />
              LE THI KHUYEN
            </p>
          </div>
        </div>
        <p className="text-center mt-4">
          Chúng tôi xin chân thành cảm ơn sự hiện diện và tình cảm ấm áp của các
          bạn trong ngày đặc biệt này. Các bạn đã làm cho ngày cưới của chúng
          tôi trở nên hoàn hảo và ý nghĩa hơn bao giờ hết. Chúng tôi sẽ luôn
          trân trọng những kỷ niệm này. 💖
        </p>
      </section>
    );
}