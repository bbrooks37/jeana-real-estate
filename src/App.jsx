import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, Mail, Phone, Clock, FileText, Award, ChevronRight } from 'lucide-react';

const App = () => {
  // Expense Tracking State (Internal)
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Marketing',
    date: new Date().toISOString().split('T')[0]
  });

  // Jeana's Contact Info
  const jeanaContact = {
    name: "Jeana Taylor",
    title: "Sales Associate | Realtor®",
    license: "SL3639250 FL",
    officeAddr: "230 N Kentucky Ave 2nd Fl, Lakeland, FL 33801",
    officePhone: "(863) 687-2233",
    directPhone: "(218) 760-9946",
    email: "jeana.taylor@cbrealty.com",
    cbrWebsite: "https://jeanataylor.sites.cbmoxi.com/"
  };

  // Listings Data with actual photos from /public
  const listings = [
    { 
      id: 1, 
      address: "466 Lake Carolyn Cir, Lakeland, FL 33813", 
      price: "$224,900", 
      beds: 2, 
      baths: 2, 
      sqft: 1318, 
      status: "PRICE CUT",
      tag: "$10K (5/6)",
      image: "/LCC.jpg" 
    },
    { 
      id: 2, 
      address: "4336 Winding Oaks Cir, Mulberry, FL 33860", 
      price: "$294,900", 
      beds: 3, 
      baths: 2, 
      sqft: 1450, 
      status: "FOR SALE",
      tag: "New Listing",
      image: "/WOC.jpg"
    },
    { 
      id: 3, 
      address: "4452 Hidden Pine Ct, Mulberry, FL", 
      price: "$295,000", 
      beds: 3, 
      baths: 2, 
      sqft: 1636, 
      status: "ACTIVE",
      tag: "Aerial Views",
      image: "/HPC.jpg"
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    const newExpense = { ...formData, id: Date.now(), amount: parseFloat(formData.amount) };
    setExpenses([newExpense, ...expenses]);
    setFormData({ description: '', amount: '', category: 'Marketing', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <span className="bg-blue-900 text-white px-2 py-1 rounded text-lg tracking-tighter">JT</span>
          <span className="hidden sm:inline">{jeanaContact.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8 font-semibold text-sm text-gray-500">
            <li className="hover:text-blue-900 cursor-pointer transition-colors">About</li>
            <li className="hover:text-blue-900 cursor-pointer transition-colors">Listings</li>
            <li className="hover:text-blue-900 cursor-pointer transition-colors">Contact</li>
          </ul>
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black leading-none text-gray-900">Jeana T.</p>
              <p className="text-[10px] text-gray-400 font-medium">{jeanaContact.title}</p>
            </div>
            <img src="/JC.jpg" alt="Jeana Closeup" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-gray-100" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        
        {/* Profile / Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <img src="/JH.jpg" alt="Jeana Headshot" className="relative rounded-3xl shadow-xl w-full max-h-137.5 object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl hidden md:block border border-gray-50">
              <p className="text-3xl font-black text-blue-900">15+</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">Years Team<br/>Experience</p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-none">{jeanaContact.name}</h1>
              <p className="text-xl text-blue-700 font-bold italic">{jeanaContact.title}</p>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest pt-2">License: {jeanaContact.license} • Coldwell Banker Realty</p>
            </div>
            <div className="prose prose-slate prose-lg text-gray-600 leading-relaxed max-w-none">
              <p className="font-bold text-gray-800">Hi, I’m Jeana!</p>
              <p>I’m proud to be part of a Coldwell Banker Realty team with over 15 years of proven success. With a strong foundation in residential real estate and continued involvement in multi-family investments, I bring real-world experience and a well-rounded understanding of the market to every client I work with.</p>
              <p>Coldwell Banker is one of the most trusted names in real estate worldwide. When you work with me, you get my personal dedication backed by a brand that has succeeded for over a century.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-blue-900/20 hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                Work With Me <ChevronRight size={18} />
              </button>
              <a href={jeanaContact.cbrWebsite} target="_blank" rel="noopener noreferrer" className="bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all border border-gray-200 text-sm flex items-center gap-2">
                Official Profile
              </a>
            </div>
          </div>
        </section>

        {/* LISTINGS SECTION */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <span className="text-blue-700 font-black text-xs uppercase tracking-[0.3em]">Market Selection</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Featured Listings</h2>
              <p className="text-gray-500 font-medium">Curated properties across Lakeland & Mulberry</p>
            </div>
            <button className="text-sm font-bold text-blue-900 hover:underline flex items-center gap-1">View All Properties <ChevronRight size={16}/></button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {listings.map((listing) => (
              <div key={listing.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container with Zoom Effect */}
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-[10px] font-black text-blue-900 uppercase tracking-widest">
                    {listing.status}
                  </div>
                  {listing.tag && (
                    <div className="absolute top-5 right-5 z-20 bg-red-600 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                      {listing.tag}
                    </div>
                  )}
                  {/* HOVER ZOOM: transition-transform and scale classes */}
                  <img 
                    src={listing.image} 
                    alt={listing.address} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-3xl font-black text-gray-900 tracking-tighter leading-none">{listing.price}</p>
                    <div className="flex items-center gap-1 text-gray-400 mt-2">
                      <MapPin size={14} />
                      <p className="text-xs font-bold truncate tracking-tight">{listing.address}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 text-sm font-bold text-gray-700 border-t border-b border-gray-50 py-5 mb-8">
                    <div className="flex flex-col items-center">
                      <Bed size={18} className="text-gray-300 mb-1" />
                      <p>{listing.beds} <span className="text-[10px] text-gray-400 font-black uppercase">Beds</span></p>
                    </div>
                    <div className="flex flex-col items-center border-x border-gray-100">
                      <Bath size={18} className="text-gray-300 mb-1" />
                      <p>{listing.baths} <span className="text-[10px] text-gray-400 font-black uppercase">Baths</span></p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Square size={16} className="text-gray-300 mb-1" />
                      <p>{listing.sqft.toLocaleString()} <span className="text-[10px] text-gray-400 font-black uppercase">Sqft</span></p>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-4 rounded-2xl text-xs font-black tracking-widest hover:bg-blue-900 transition-colors uppercase">
                    Request Information
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OPERATIONS PORTAL */}
        <section className="bg-slate-900 p-8 sm:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="mb-12 border-b border-slate-800 pb-6 relative z-10">
            <h2 className="text-2xl font-black tracking-tight">Operations Portal</h2>
            <p className="text-slate-400 text-sm font-medium">Marketing Expense Ledger & Asset Management</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-black text-[10px] uppercase text-blue-400 tracking-[0.2em] mb-4">Add Entry</h3>
              <div className="space-y-4">
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="w-full rounded-xl bg-slate-800 border-none p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-500" placeholder="Description" />
                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} className="w-full rounded-xl bg-slate-800 border-none p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-500" placeholder="Amount ($)" />
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full rounded-xl bg-slate-800 border-none p-4 text-sm outline-none cursor-pointer">
                  <option>Marketing</option>
                  <option>Professional Photos</option>
                  <option>Staging</option>
                  <option>Maintenance</option>
                </select>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-black hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95">Add to Ledger</button>
              </div>
            </form>

            <div className="xl:col-span-2 bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                    <th className="py-6 px-6">Date</th>
                    <th className="py-6 px-6">Details</th>
                    <th className="py-6 px-6 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-medium">
                  {expenses.length === 0 ? (
                    <tr><td colSpan="3" className="py-20 text-center text-slate-500 italic">No marketing expenses logged.</td></tr>
                  ) : (
                    expenses.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-5 px-6 text-slate-400">{item.date}</td>
                        <td className="py-5 px-6 text-slate-200">{item.description}</td>
                        <td className="py-5 px-6 text-right font-black text-blue-400">${item.amount.toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border border-gray-100 p-10 sm:p-16 rounded-[3rem] grid grid-cols-1 md:grid-cols-2 gap-12 text-sm shadow-sm">
          <div className="space-y-6">
             <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">CB</div>
                <div>
                  <p className="font-black text-gray-900 text-lg leading-tight">Coldwell Banker Realty</p>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-none">Global Luxury Trusted</p>
                </div>
             </div>
             <div className="space-y-2 text-gray-500 font-medium">
               <div className="flex items-center gap-2"><MapPin size={16} /> {jeanaContact.officeAddr}</div>
               <div className="flex items-center gap-2"><Phone size={16} /> {jeanaContact.directPhone}</div>
               <div className="flex items-center gap-2 text-blue-600 font-bold"><Mail size={16} /> {jeanaContact.email}</div>
             </div>
          </div>
          <div className="flex flex-col justify-end text-xs space-y-4 md:text-right">
             <p className="text-gray-400 font-bold tracking-tight leading-relaxed max-w-xs md:ml-auto uppercase">
               Coldwell Banker and the Coldwell Banker logo are trademarks of Coldwell Banker Real Estate LLC. Independently owned and operated.
             </p>
             <div className="text-gray-300 flex md:justify-end gap-4 uppercase font-black tracking-widest text-[10px]">
               <span>© {new Date().getFullYear()} JT Real Estate</span>
               <span className="text-blue-700">License {jeanaContact.license}</span>
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;