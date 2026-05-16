/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  ShoppingBag, 
  ChevronRight, 
  Star, 
  Clock, 
  ShieldCheck,
  Instagram,
  Facebook,
  Mail,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Trà Móc Câu Đặc Biệt",
    description: "hững búp trà 1 tôm 1 lá được tuyển chọn kỹ lưỡng, mang hương vị cốm non nồng nàn, vị chát dịu hậu ngọt sâu nước xanh ánh vàng.",
    price: "600.000đ",
    image: "/TraCOhien.png",
    badge: "Bán chạy"
  },
  {
    id: 2,
    name: "Trà Móc Câu truyền thống",
    description: "Cánh trà xoăn tít như móc câu, nước trà xanh vàng óng. Đặc sản vùng chè Tân Cương chính gốc.",
    price: "300.000đ",
    image: "/300K.png",
    badge: "Cao cấp"
  },
  
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-porcelain selection:bg-tea-green selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 sparkle-glass shadow-sm" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-tea-green/10 rounded-full flex items-center justify-center text-tea-green">
                  <Leaf size={24} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-red-600 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-red-600 tracking-tighter leading-none">Trà Cô Hiền</span>
                <span className="text-[8px] uppercase tracking-widest text-tea-green font-bold">Đẳng cấp từ thiên nhiên</span>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {["Trang chủ", "Sản phẩm", "Câu chuyện", "Liên hệ"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-tea-green transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tea-green transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-tea-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-tea-light transition-all tea-leaf-shadow flex items-center gap-2"
          >
            <ShoppingBag size={18} />
            Mua ngay
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-porcelain via-porcelain/80 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1544787210-282ca488bc27?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Đồi trà Thái Nguyên"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-tea-light mb-6">
              <div className="h-px w-8 bg-tea-light" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Thương hiệu Trà Di sản</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-tea-green leading-[0.9] mb-8 tracking-tighter">
              Trà Việt Nam <br /> 
              <span className="italic font-normal italic text-earth">Đẳng cấp từ</span> <br /> 
              Thiên nhiên
            </h1>
            <p className="text-lg text-earth/80 max-w-lg mb-10 leading-relaxed font-light">
              Khởi nguồn từ tâm huyết của Trà Cô Hiền, chúng tôi mang đến những búp trà Thái Nguyên tinh túy nhất, 
              được chăm sóc và chế biến thủ công tại vùng đất Giang Thành, An Giang.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tea-green text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-tea-light transition-all flex items-center gap-2 group">
                Khám phá bộ sưu tập
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-earth/20 px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-tea-green/5 blur-[120px] rounded-full" />
            <img 
              src="/600K.png"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl border-8 border-white"
              alt="Tea Art"
              referrerPolicy="no-referrer"
            />
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 sparkle-glass p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center"
            >
              <Star className="text-amber-400 mb-1" fill="currentColor" size={24} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Sản phẩm 5 Sao</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="câu chuyện" className="py-24 bg-silk relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <motion.div 
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.9 }}
               className="relative z-10 overflow-hidden rounded-[2rem] aspect-[4/5] tea-leaf-shadow"
             >
               <img 
                 src="https://images.unsplash.com/photo-1594631252845-29fc4586c55c?auto=format&fit=crop&q=80&w=1000"
                 className="w-full h-full object-cover"
                 alt="Tea Harvesting"
                 referrerPolicy="no-referrer"
               />
             </motion.div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[20px] border-tea-green/5 rounded-full -z-0" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif text-tea-green mb-8 leading-tight">
              Tình yêu từ vùng đất <br /> <span className="italic">Giang Thành, An Giang</span>
            </h2>
            <div className="space-y-6 text-earth/80 font-light leading-relaxed">
              <p>
                Tại Ấp Khánh Hòa, xã Giang Thành, tỉnh An Giang, hành trình của Trà Cô Hiền không chỉ đơn thuần là kinh doanh trà. 
                Đó là câu chuyện về lòng hiếu khách, về sự trân quý thiên nhiên và khao khát mang hương vị Trà Thái Nguyên 
                đúng chuẩn về phục vụ bà con vùng quê.
              </p>
              <p>
                Chúng tôi hiểu rằng, mỗi chén trà là một câu chuyện khởi đầu, là sự gắn kết cộng đồng. 
                Vì vậy, mọi khâu từ lựa chọn nguồn trà tại vũng lõi Thái Nguyên đến quy trình bảo quản đều được kiểm soát gắt gao.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-tea-green/10 flex items-center justify-center text-tea-green">
                  <ShieldCheck />
                </div>
                <h4 className="font-serif font-bold text-lg">Chất lượng thật</h4>
                <p className="text-sm text-earth/60">Trà chính gốc Thái Nguyên, không pha tạp, không chất bảo quản.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-tea-green/10 flex items-center justify-center text-tea-green">
                  <Clock />
                </div>
                <h4 className="font-serif font-bold text-lg">Giao nhanh local</h4>
                <p className="text-sm text-earth/60">Phục vụ tận tâm khu vực Giang Thành, Vĩnh Điều và lân cận.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="sản phẩm" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl font-serif text-tea-green mb-6 italic">Sản phẩm nổi bật</h2>
              <p className="text-earth/70 font-light">
                Danh sách những loại trà được ưa chuộng nhất tại Trà Cô Hiền, hội tụ đủ Sắc - Hương - Vị của vùng trà đệ nhất.
              </p>
            </div>
            <button className="text-tea-green font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs">
              Xem tất cả <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[1/1.2] mb-6 tea-leaf-shadow">
                  {product.image ? (
                    <img 
                      src={product.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={product.name}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-tea-light/10 flex items-center justify-center">
                      <Leaf size={48} className="text-tea-light opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <button className="bg-white text-tea-green w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                       <ShoppingBag size={20} />
                       Thêm vào giỏ hàng
                     </button>
                  </div>
                  <div className="absolute top-6 left-6 sparkle-glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-tea-green">
                    {product.badge}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-tea-green mb-2">{product.name}</h3>
                <p className="text-sm text-earth/60 mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                <span className="text-xl font-bold text-earth">{product.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="liên hệ" className="py-24 bg-tea-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-y-20 -translate-x-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 lg:flex items-center gap-20">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
             <h2 className="text-5xl font-serif mb-12">Ghé thăm Trà Cô Hiền</h2>
             <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl mb-2">Địa chỉ cửa hàng</h5>
                    <p className="text-white/70 font-light leading-relaxed">
                      Chợ Đầm Chít, Xã Giang Thành, <br />
                      Tỉnh An Giang.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl mb-2">Số điện thoại hỗ trợ</h5>
                    <p className="text-white/70 font-light leading-relaxed">
                      Hotline đặt hàng: <span className="text-white font-bold text-2xl">0973 911 822</span> <br />
                      Hỗ trợ Zalo: Phạm Thị Hiền
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl mb-2">Email liên hệ</h5>
                    <p className="text-white/70 font-light">phamthihienkiengiang@gmail.com</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white/5 rounded-[2rem] p-10 backdrop-blur-xl border border-white/10">
               <h3 className="text-2xl font-serif mb-8 italic">Gửi yêu cầu đặt hàng</h3>
               <form className="space-y-6">
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-bold text-white/50">Họ và tên</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-bold text-white/50">Điện thoại</label>
                     <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40" />
                   </div>
                 </div>
                 <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest font-bold text-white/50">Bạn muốn tìm loại trà nào?</label>
                     <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/40">
                        <option>Trà Thái Nguyên Thượng Hạng</option>
                        <option>Trà Móc Câu</option>
                        <option>Hồng Trà</option>
                        <option>Khác</option>
                     </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest font-bold text-white/50">Lời nhắn</label>
                   <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-white/40" />
                 </div>
                 <button className="w-full bg-white text-tea-green py-4 rounded-xl font-bold hover:bg-porcelain transition-colors">
                   Xác nhận thông tin
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Impressive & Unique */}
      <footer className="relative bg-porcelain pt-24 pb-12 overflow-hidden">
        {/* Decorative Leaf Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 gap-20 p-20">
            {Array.from({ length: 40 }).map((_, i) => (
              <Leaf key={i} size={40} className="text-tea-green rotate-45" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
               whileInView={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="mb-8 relative"
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-tea-green/20">
                <div className="flex flex-col items-center">
                   <Leaf size={48} className="text-tea-green mb-2" />
                   <div className="h-1 w-12 bg-red-600 rounded-full" />
                </div>
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-serif text-red-600 tracking-tighter mb-4 italic">Trà Cô Hiền</h2>
            <div className="bg-tea-green text-white px-6 py-2 rounded-lg text-sm font-bold mb-8 transform -rotate-2">
              Chợ Đầm Chít - Giang Thành - An Giang
            </div>
            <p className="text-xl text-earth/60 font-light max-w-2xl italic">
              "Gửi gắm tinh hoa đất trời trong từng búp trà xanh, <br /> mang hương vị quê hương đến mọi nhà."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-earth/10 pt-16">
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-serif font-bold text-2xl text-tea-green mb-6">Trà Cô Hiền - An Giang</h4>
              <p className="text-earth/60 font-light mb-8 max-w-sm">
                Chúng tôi tự hào là cầu nối mang sản phẩm trà Thái Nguyên chất lượng nhất đến với người dân vùng sông nước An Giang.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 border border-earth/10 rounded-full flex items-center justify-center hover:bg-tea-green hover:text-white transition-all text-earth/60">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-tea-green mb-6">Khám phá</h4>
              <ul className="space-y-4 text-earth/60 font-light text-sm">
                <li><a href="#" className="hover:text-tea-green transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Hệ thống trà</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Chính sách giao hàng</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Góc trà đạo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-tea-green mb-6">Hỗ trợ</h4>
              <ul className="space-y-4 text-earth/60 font-light text-sm">
                <li><a href="#" className="hover:text-tea-green transition-colors">Liên hệ fanpage</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Báo cáo chất lượng</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Zalo: 0973 911 822</a></li>
                <li><a href="#" className="hover:text-tea-green transition-colors">Địa chỉ Giang Thành</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-earth/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-earth/40 uppercase tracking-widest font-bold">
              © 2026 TRÀ CÔ HIỀN. Thiết kế bởi Tống Xuân Đông.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-earth/40">Local Brand in Vietnam</span>
            </div>
          </div>
        </div>

        {/* Unique Bottom Sparkle Element */}
        <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-tea-green/20 to-transparent w-full" />
      </footer>
    </div>
  );
}

