import React, { useState } from 'react';
import { Ruler, Plus, UserCheck, Sparkles, Trash2, CheckCircle2, Scissors, BookOpen } from 'lucide-react';
import { ClientMeasurement } from '../data/tailoringData';

interface MeasurementViewProps {
  clients: ClientMeasurement[];
  onAddClient: (client: Omit<ClientMeasurement, 'id' | 'updatedAt'>) => void;
  onDeleteClient: (id: string) => void;
}

export const MeasurementView: React.FC<MeasurementViewProps> = ({
  clients,
  onAddClient,
  onDeleteClient,
}) => {
  const [selectedClient, setSelectedClient] = useState<ClientMeasurement>(clients[0]);
  const [dressStyle, setDressStyle] = useState<'togri' | 'koketka' | 'klyosh'>('koketka');
  const [showAddForm, setShowAddForm] = useState(false);

  // New client form state
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Mijoz');
  const [chest, setChest] = useState('96');
  const [waist, setWaist] = useState('78');
  const [hips, setHips] = useState('104');
  const [shoulder, setShoulder] = useState('38');
  const [sleeve, setSleeve] = useState('56');
  const [length, setLength] = useState('125');
  const [notes, setNotes] = useState('');
  const [savedBanner, setSavedBanner] = useState(false);

  // Active numbers for calculation
  const c = selectedClient?.chest || 100;
  const w = selectedClient?.waist || 84;
  const h = selectedClient?.hips || 108;
  const sh = selectedClient?.shoulder || 39;
  const sl = selectedClient?.sleeve || 56;
  const len = selectedClient?.length || 125;

  // Tailoring formulas
  const halfChestWithEase = Math.round((c / 2 + 3) * 10) / 10;
  const halfWaistWithEase = Math.round((w / 2 + 2.5) * 10) / 10;
  const halfHipsWithEase = Math.round((h / 2 + 3) * 10) / 10;
  const neckWidth = Math.round((c / 12 - 0.5) * 10) / 10;
  const armholeDepth = Math.round((c / 4 + 5) * 10) / 10;

  // Fabric yardage calculation (in meters)
  // 150cm wide standard fabric vs 90-110cm wide Uzbek Adras/Atlas
  const baseMeters150 = (len + sl + 15) / 100;
  const styleMultiplier = dressStyle === 'klyosh' ? 1.35 : dressStyle === 'koketka' ? 1.15 : 1.0;
  const fabric150 = (baseMeters150 * styleMultiplier).toFixed(2);
  const fabricAdras = (baseMeters150 * styleMultiplier * 1.45).toFixed(2);

  const handleSaveNewClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newEntry = {
      name: name.trim(),
      relation,
      chest: Number(chest) || 96,
      waist: Number(waist) || 78,
      hips: Number(hips) || 104,
      shoulder: Number(shoulder) || 38,
      sleeve: Number(sleeve) || 56,
      length: Number(length) || 125,
      notes: notes.trim() || "Standart o'lcham bo'yicha",
    };
    onAddClient(newEntry);
    setName('');
    setNotes('');
    setShowAddForm(false);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 3000);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header Card */}
      <div className="rounded-2xl bg-[#F3EFE6] border border-[#E2D9C8] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C85A32] mb-1">
              <Ruler className="w-3.5 h-3.5" />
              Aqlli Bichish Yordamchisi
            </span>
            <h2 className="font-serif-display text-2xl font-bold text-[#1E1A17]">
              O'lcham Daftarchasi va Mato Hisoblagich
            </h2>
            <p className="text-sm text-[#6E655F] mt-1 leading-relaxed">
              Yaqinlaringiz va mijozlaringiz o'lchamini saqlab qo'ying — ilova andoza chiziqlari va necha metr mato ketishini o'zi hisoblab beradi.
            </p>
          </div>
        </div>

        {/* Saved Clients Selector */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E655F]">
              Saqlangan o'lchamlar ({clients.length} ta)
            </span>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C85A32] bg-[#FBF9F5] hover:bg-[#C85A32] hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-[#C85A32]/30 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              {showAddForm ? 'Yopish' : "Yangi o'lcham qo'shish"}
            </button>
          </div>

          {savedBanner && (
            <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#2E6F40]/10 border border-[#2E6F40]/30 px-3.5 py-2.5 text-sm font-medium text-[#2E6F40]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Yangi o'lcham daftarchaga muvaffaqiyatli saqlandi!
            </div>
          )}

          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
            {clients.map((client) => {
              const isSelected = selectedClient?.id === client.id;
              return (
                <div
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`shrink-0 rounded-xl p-3.5 border transition-all cursor-pointer min-w-[175px] ${
                    isSelected
                      ? 'bg-[#1E1A17] text-[#FBF9F5] border-[#1E1A17] shadow-sm'
                      : 'bg-[#FBF9F5] text-[#1E1A17] border-[#E2D9C8] hover:border-[#C85A32]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#C85A32] text-white'
                          : 'bg-[#F3EFE6] text-[#6E655F]'
                      }`}
                    >
                      {client.relation}
                    </span>
                    {clients.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteClient(client.id);
                          if (isSelected) {
                            const remaining = clients.filter((item) => item.id !== client.id);
                            if (remaining[0]) setSelectedClient(remaining[0]);
                          }
                        }}
                        title="O'chirish"
                        className={`p-1 rounded hover:bg-red-500/20 ${
                          isSelected ? 'text-[#FBF9F5]/60 hover:text-red-300' : 'text-[#6E655F] hover:text-red-600'
                        }`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <p className="font-bold text-base mt-2 truncate">{client.name}</p>
                  <p
                    className={`font-mono-num text-xs mt-1 ${
                      isSelected ? 'text-[#FBF9F5]/80' : 'text-[#6E655F]'
                    }`}
                  >
                    K:{client.chest} • B:{client.waist} • Bo'y:{client.length} sm
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add New Client Collapsible Form */}
      {showAddForm && (
        <form
          onSubmit={handleSaveNewClient}
          className="rounded-2xl bg-[#FBF9F5] border-2 border-[#C85A32] p-5 space-y-4 shadow-md"
        >
          <div className="flex items-center justify-between border-b border-[#E2D9C8] pb-3">
            <h3 className="font-serif-display text-lg font-bold text-[#1E1A17]">
              Yangi inson o'lchamini kiritish
            </h3>
            <span className="text-xs text-[#6E655F]">Barcha o'lchamlar santimetrda (sm)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                Ismi (masalan: Gulnora opam) *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismini yozing..."
                className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#C85A32]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#1E1A17] mb-1">Kim bo'ladi?</label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#C85A32]"
              >
                <option value="Oila a'zosi">Oila a'zosi</option>
                <option value="Doimiy mijoz">Doimiy mijoz</option>
                <option value="Qo'shni">Qo'shni</option>
                <option value="Shaxsiy andoza">Shaxsiy andoza</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Ko'krak aylanasi (sm)
              </label>
              <input
                type="number"
                value={chest}
                onChange={(e) => setChest(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Bel aylanasi (sm)
              </label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Bo'ksa aylanasi (sm)
              </label>
              <input
                type="number"
                value={hips}
                onChange={(e) => setHips(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Yelka kengligi (sm)
              </label>
              <input
                type="number"
                value={shoulder}
                onChange={(e) => setShoulder(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Yeng uzunligi (sm)
              </label>
              <input
                type="number"
                value={sleeve}
                onChange={(e) => setSleeve(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#6E655F] mb-1">
                Ko'ylak uzunligi (sm)
              </label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full font-mono-num rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-base font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#6E655F] mb-1">
              Maxsus eslatma (ixtiyoriy)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Masalan: Yoqasini sal kengroq va cho'ntakli xohlaydi..."
              className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#6E655F] hover:bg-[#F3EFE6]"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-[#C85A32] text-white hover:bg-[#b04b25] shadow-sm cursor-pointer"
            >
              Daftarchaga saqlash
            </button>
          </div>
        </form>
      )}

      {/* Active Person Measurement & Formula Sheet */}
      {selectedClient && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Raw Measurements + Dress Style Picker */}
          <div className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E2D9C8] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#1E1A17]">
                    {selectedClient.name}
                  </h3>
                  <p className="text-xs text-[#6E655F]">{selectedClient.notes}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Ko'krak</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{c} sm</span>
              </div>
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Bel</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{w} sm</span>
              </div>
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Bo'ksa</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{h} sm</span>
              </div>
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Yelka</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{sh} sm</span>
              </div>
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Yeng</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{sl} sm</span>
              </div>
              <div className="rounded-xl bg-[#F3EFE6] p-3 text-center">
                <span className="text-[11px] font-semibold text-[#6E655F] block">Uzunligi</span>
                <span className="font-mono-num text-lg font-bold text-[#1E1A17]">{len} sm</span>
              </div>
            </div>

            {/* Choose Fason / Model */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6E655F] mb-2">
                Tikiladigan ko'ylak fasonini tanlang:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'koketka', label: 'Koketkali burma' },
                  { id: 'togri', label: "To'g'ri bichim" },
                  { id: 'klyosh', label: 'Quyosh klyosh' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDressStyle(item.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      dressStyle === item.id
                        ? 'bg-[#C85A32] text-white border-[#C85A32]'
                        : 'bg-[#F3EFE6] text-[#1E1A17] border-[#D8CEBE]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Requirement Result */}
            <div className="rounded-xl bg-[#3D5A45] text-[#FBF9F5] p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5]/80">
                <Sparkles className="w-4 h-4 text-[#E8C56B]" />
                Qancha mato xarid qilish kerak?
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white/10 rounded-lg p-2.5">
                  <span className="text-[11px] text-[#FBF9F5]/80 block">
                    Standart mato (eni 150 sm)
                  </span>
                  <span className="font-mono-num text-xl font-bold text-[#E8C56B]">
                    {fabric150} metr
                  </span>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5">
                  <span className="text-[11px] text-[#FBF9F5]/80 block">
                    Adras / Atlas (eni 90-110 sm)
                  </span>
                  <span className="font-mono-num text-xl font-bold text-[#E8C56B]">
                    {fabricAdras} metr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Ready-to-chalk Pattern Drafting Numbers */}
          <div className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E2D9C8] pb-3">
              <Scissors className="w-5 h-5 text-[#C85A32]" />
              <div>
                <h3 className="font-serif-display text-lg font-bold text-[#1E1A17]">
                  Matoga bo'r bilan chizish tayyor o'lchamlari
                </h3>
                <p className="text-xs text-[#6E655F]">
                  Mato ikki buklanganda erkinlik haqi qo'shilgan tayyor sonlar:
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E2D9C8]">
                <div>
                  <p className="text-sm font-bold text-[#1E1A17]">Ko'krak chizig'i kengligi</p>
                  <p className="text-xs text-[#6E655F]">Kya/2 + 3 sm erkinlik haqi</p>
                </div>
                <span className="font-mono-num text-base font-bold text-[#C85A32] bg-[#FBF9F5] px-3 py-1 rounded-lg border border-[#E2D9C8]">
                  {halfChestWithEase} sm
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E2D9C8]">
                <div>
                  <p className="text-sm font-bold text-[#1E1A17]">Bel chizig'i kengligi</p>
                  <p className="text-xs text-[#6E655F]">Bya/2 + 2.5 sm erkinlik haqi</p>
                </div>
                <span className="font-mono-num text-base font-bold text-[#C85A32] bg-[#FBF9F5] px-3 py-1 rounded-lg border border-[#E2D9C8]">
                  {halfWaistWithEase} sm
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E2D9C8]">
                <div>
                  <p className="text-sm font-bold text-[#1E1A17]">Bo'ksa chizig'i kengligi</p>
                  <p className="text-xs text-[#6E655F]">Bo'ksa/2 + 3 sm erkinlik haqi</p>
                </div>
                <span className="font-mono-num text-base font-bold text-[#C85A32] bg-[#FBF9F5] px-3 py-1 rounded-lg border border-[#E2D9C8]">
                  {halfHipsWithEase} sm
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E2D9C8]">
                <div>
                  <p className="text-sm font-bold text-[#1E1A17]">Yoqa o'mizi kengligi</p>
                  <p className="text-xs text-[#6E655F]">Orqa chuqurligi: 2.5 sm | Old: 8.5 sm</p>
                </div>
                <span className="font-mono-num text-base font-bold text-[#3D5A45] bg-[#FBF9F5] px-3 py-1 rounded-lg border border-[#E2D9C8]">
                  {neckWidth} sm
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F3EFE6] border border-[#E2D9C8]">
                <div>
                  <p className="text-sm font-bold text-[#1E1A17]">Qo'ltiq (proyma) chuqurligi</p>
                  <p className="text-xs text-[#6E655F]">Yelka nuqtasidan ko'krak chizig'igacha</p>
                </div>
                <span className="font-mono-num text-base font-bold text-[#3D5A45] bg-[#FBF9F5] px-3 py-1 rounded-lg border border-[#E2D9C8]">
                  {armholeDepth} sm
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-[#B8860B]/10 border border-[#B8860B]/30 p-3 text-xs text-[#1E1A17] flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <span>
                <strong>Eslatma:</strong> Ushbu sonlar asosiy andoza chizig'idir. Qirqayotganda yon va yelka chokiga <strong>+1.5 sm</strong>, etagiga esa <strong>+3.0 sm</strong> chok haqi qo'shib kesing.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
