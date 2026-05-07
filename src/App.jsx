import React, { useState } from 'react';

const App = () => {
  // Expense Tracking State
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Marketing',
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };

    setExpenses([newExpense, ...expenses]);
    setFormData({
      description: '',
      amount: '',
      category: 'Marketing',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
        <div className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <span className="bg-blue-900 text-white p-1 rounded">JE</span>
          Jeana Real Estate
        </div>
        
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 font-medium text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Operations</li>
            <li className="hover:text-blue-600 cursor-pointer">Listings</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
          
          {/* Circular Closeup in Nav (JC.jpg) */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold leading-none">Jeana H.</p>
              <p className="text-[10px] text-gray-500">Agent</p>
            </div>
            <img 
              src="/JC.jpg" 
              alt="Jeana Closeup" 
              className="w-10 h-10 rounded-full object-cover border border-blue-200"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile / Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="relative">
            {/* Professional Headshot (JH.jpg) */}
            <img 
              src="/JH.jpg" 
              alt="Jeana Headshot" 
              className="rounded-2xl shadow-lg w-full max-h-125 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-xl hidden md:block">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-widest">Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Selling the lifestyle, <br />
              <span className="text-blue-700">not just the home.</span>
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to your real estate portal. This system allows us to manage 
              property expenditures and marketing budgets in real-time, 
              ensuring every listing gets the investment it deserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-all">
                New Listing
              </button>
              <button className="border-2 border-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all">
                View Reports
              </button>
            </div>
          </div>
        </section>

        {/* Expense Management System */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Expense Management</h2>
            <p className="text-gray-500">Track and approve listing-related costs</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="xl:col-span-1">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold mb-4 text-gray-700">Add Manual Entry</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500 p-2.5 border"
                      placeholder="e.g., Professional Staging"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Amount ($)</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500 p-2.5 border"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-gray-200 p-2.5 border"
                    >
                      <option>Marketing</option>
                      <option>Maintenance</option>
                      <option>Legal/Closing</option>
                      <option>Office</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Add to Ledger
                  </button>
                </div>
              </form>
            </div>

            {/* Data Table */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Details</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {expenses.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-10 text-center text-gray-400 italic">No entries recorded.</td>
                      </tr>
                    ) : (
                      expenses.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.description}</td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                              {item.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-gray-900">${item.amount.toFixed(2)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;