import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, Mail, Phone, Clock, FileText, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
        <div className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <span className="bg-blue-900 text-white p-1 rounded">JT</span>
          {jeanaContact.name}
        </div>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Listings</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 cursor-pointer font-bold text-blue-800">Operations Portal</li>
          </ul>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold leading-none">Jeana T.</p>
              <p className="text-[10px] text-gray-500">{jeanaContact.title}</p>
            </div>
            <img src="/JC.jpg" alt="Jeana Closeup" className="w-10 h-10 rounded-full object-cover border border-blue-200" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Profile / Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="relative">
            <img src="/JH.jpg" alt="Jeana Headshot" className="rounded-2xl shadow-lg w-full max-h-125 object-cover" />
            <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-4 rounded-xl hidden md:block shadow-xl">
              <p className="text-xl font-bold">15+</p>
              <p className="text-[10px] uppercase tracking-tighter">Team Experience</p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="border-b border-gray-100 pb-3">
              <h1 className="text-4xl font-extrabold text-gray-900">{jeanaContact.name}</h1>
              <p className="text-blue-800 font-semibold">{jeanaContact.title}</p>
              <p className="text-gray-500 text-xs mt-1">License: {jeanaContact.license} | Coldwell Banker Realty</p>
            </div>
            <div className="prose prose-blue prose-sm text-gray-600 max-w-none space-y-3">
              <p className="font-bold text-gray-800 text-base">Hi, I’m Jeana!</p>
              <p>I’m proud to be part of a Coldwell Banker Realty team with over 15 years of proven success. With a strong foundation in residential real estate and continued involvement in multi-family investments, I bring real-world experience and a well-rounded understanding of the market to every client I work with.</p>
              <p>Coldwell Banker is one of the most trusted names in real estate worldwide, known for innovative technology and a powerful network. When you work with me, you get my personal dedication backed by a brand that has succeeded for over a century.</p>
              <p>My goal is to make your process clear, smooth, and as stress-free as possible. Let's start the journey.</p>
            </div>
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-all">New Listing</button>
              <a href={jeanaContact.cbrWebsite} target="_blank" rel="noopener noreferrer" className="border-2 border-gray-200 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-50 text-sm">Official CB Profile</a>
            </div>
          </div>
        </section>

        {/* LISTINGS SECTION */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Listings</h2>
              <p className="text-gray-500">Explore my current properties in Lakeland & Mulberry</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="h-56 relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                    {listing.status}
                  </div>
                  {listing.tag && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {listing.tag}
                    </div>
                  )}
                  <img src={listing.image} alt={listing.address} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-2xl font-black text-gray-900">{listing.price}</p>
                    <p className="text-sm text-gray-500 font-medium truncate">{listing.address}</p>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-gray-700 border-t border-b border-gray-50 py-4 mb-6">
                    <div className="text-center">
                      <p className="text-gray-400 text-[10px] uppercase">Beds</p>
                      <p>{listing.beds}</p>
                    </div>
                    <div className="text-center border-x border-gray-100 px-6">
                      <p className="text-gray-400 text-[10px] uppercase">Baths</p>
                      <p>{listing.baths}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-[10px] uppercase">Sqft</p>
                      <p>{listing.sqft.toLocaleString()}</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-50 text-blue-700 py-3 rounded-xl text-sm font-black hover:bg-blue-600 hover:text-white transition-all">
                    REQUEST INFORMATION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPENSE MANAGEMENT SECTION (Operational Portal) */}
        <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
          <div className="mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Operations Portal: Expense Ledger</h2>
            <p className="text-gray-500">Track and approve listing-related marketing costs</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-xs uppercase text-gray-400 tracking-widest">Add Ledger Entry</h3>
              <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="w-full rounded-lg border-gray-200 p-3 border focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Marketing Description" />
              <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} className="w-full rounded-lg border-gray-200 p-3 border focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Amount ($)" />
              <select name="category" value={formData.category} onChange={handleInputChange} className="w-full rounded-lg border-gray-200 p-3 border outline-none">
                <option>Marketing</option>
                <option>Maintenance</option>
                <option>Professional Photos</option>
                <option>Staging</option>
              </select>
              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-black transition-all">Add to Ledger</button>
            </form>

            <div className="xl:col-span-2 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-100">
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <th className="pb-4 px-2">Date</th>
                    <th className="pb-4 px-2">Details</th>
                    <th className="pb-4 px-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {expenses.length === 0 ? (
                    <tr><td colSpan="3" className="py-12 text-center text-gray-400 italic">No marketing expenses logged.</td></tr>
                  ) : (
                    expenses.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-4 px-2 text-gray-500">{item.date}</td>
                        <td className="py-4 px-2 font-bold text-gray-800">{item.description}</td>
                        <td className="py-4 px-2 text-right font-black text-blue-900">${item.amount.toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer with CB Info & Legal */}
        <footer className="bg-slate-900 text-slate-400 p-10 rounded-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
             <div className="flex gap-2 items-center">
                <Award className="text-amber-500"/>
                <p className="font-bold text-white text-base">Coldwell Banker Realty</p>
             </div>
             <p className="text-xs">{jeanaContact.officeAddr}</p>
             <p>Office: {jeanaContact.officePhone} | Direct: {jeanaContact.directPhone}</p>
             <a href={`mailto:${jeanaContact.email}`} className="text-blue-400 hover:underline">{jeanaContact.email}</a>
          </div>
          <div className="text-xs space-y-2 border-t border-slate-700 md:border-none pt-6 md:pt-0">
             <p>© {new Date().getFullYear()} Jeana Taylor Real Estate. All Rights Reserved.</p>
             <p>License: {jeanaContact.license}</p>
             <p className="opacity-60 text-[10px]">Coldwell Banker and the Coldwell Banker logo are trademarks of Coldwell Banker Real Estate LLC. Independently owned and operated.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;