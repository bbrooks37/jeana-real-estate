import { Bed, Bath, Square, MapPin, Mail, Phone } from 'lucide-react';

const listings = [
  { id: 1, price: "$525,000", addr: "123 Lakeland Dr", beds: 4, baths: 3, sqft: 2400 },
  { id: 2, price: "$385,000", addr: "456 Orange Ave", beds: 3, baths: 2, sqft: 1800 },
  { id: 3, price: "$610,000", addr: "789 Swan Lake Cir", beds: 4, baths: 4, sqft: 3100 },
  { id: 4, price: "$445,000", addr: "101 Polk St", beds: 3, baths: 2, sqft: 1950 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Header / Hero */}
      <header className="bg-slate-900 text-white py-24 px-6 text-center border-b-4 border-amber-600">
        <h1 className="text-6xl font-black tracking-tight mb-4 uppercase">Jeana Taylor</h1>
        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
          Modern Marketing • Personal Service • Lakeland Expertise
        </p>
      </header>

      {/* Featured Listings Grid */}
      <main className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold italic">Featured Listings</h2>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {listings.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1">
              {/* Photo Placeholder */}
              <div className="h-80 bg-slate-200 relative flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 uppercase tracking-widest font-bold">Property Image</span>
                <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-black">ACTIVE</div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900">{item.price}</h3>
                    <p className="text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin size={16} className="text-amber-600"/> {item.addr}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50 my-6">
                  <div className="text-center">
                    <p className="text-xs text-slate-400 uppercase font-bold">Beds</p>
                    <p className="font-bold text-lg flex items-center justify-center gap-1"><Bed size={16}/> {item.beds}</p>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <p className="text-xs text-slate-400 uppercase font-bold">Baths</p>
                    <p className="font-bold text-lg flex items-center justify-center gap-1"><Bath size={16}/> {item.baths}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-400 uppercase font-bold">Sq Ft</p>
                    <p className="font-bold text-lg flex items-center justify-center gap-1"><Square size={16}/> {item.sqft}</p>
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-amber-600 transition-colors">
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modern Lead Capture Form */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-bl-full"></div>
          <h2 className="text-4xl font-black mb-2">Interested in a property?</h2>
          <p className="text-slate-500 mb-10 text-lg">Send Jeana a message and get a response within 24 hours.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
            <input type="email" placeholder="Email Address" className="p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-600 outline-none" />
            <textarea placeholder="Tell Jeana about your dream home..." className="md:col-span-2 p-4 bg-slate-50 border-none rounded-xl h-40 focus:ring-2 focus:ring-amber-600 outline-none"></textarea>
            <button className="md:col-span-2 bg-amber-600 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:shadow-lg hover:shadow-amber-600/30 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}