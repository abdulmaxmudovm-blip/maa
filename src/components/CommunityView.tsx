import React, { useState, useRef } from 'react';
import {
  Heart,
  MessageCircle,
  Camera,
  Send,
  Sparkles,
  Clock,
  Layers,
  MapPin,
  Bookmark,
  Plus,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import { CommunityPost } from '../data/tailoringData';

interface CommunityViewProps {
  posts: CommunityPost[];
  onToggleLike: (postId: string) => void;
  onToggleSave: (postId: string) => void;
  onAddComment: (postId: string, authorName: string, commentText: string) => void;
  onCreatePost: (newPost: {
    authorName: string;
    authorCity: string;
    title: string;
    story: string;
    fabricUsed: string;
    timeSpent: string;
    image: string;
  }) => void;
  defaultAuthorName: string;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  posts,
  onToggleLike,
  onToggleSave,
  onAddComment,
  onCreatePost,
  defaultAuthorName,
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [openCommentsPostId, setOpenCommentsPostId] = useState<string | null>('post-1');
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  // Create post form states
  const [authorName, setAuthorName] = useState(defaultAuthorName);
  const [authorCity, setAuthorCity] = useState('Toshkent');
  const [title, setTitle] = useState('');
  const [fabricUsed, setFabricUsed] = useState('');
  const [timeSpent, setTimeSpent] = useState('3 soat');
  const [story, setStory] = useState('');
  const [previewImage, setPreviewImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreviewImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !story.trim()) return;

    onCreatePost({
      authorName: authorName.trim() || defaultAuthorName,
      authorCity: authorCity.trim() || 'Toshkent',
      title: title.trim(),
      story: story.trim(),
      fabricUsed: fabricUsed.trim() || 'Tabiiy paxta / Adras mato',
      timeSpent: timeSpent.trim() || '4 soat',
      image: previewImage || posts[0].image,
    });

    setTitle('');
    setFabricUsed('');
    setStory('');
    setPreviewImage('');
    setShowCreateModal(false);
  };

  const handleCommentSubmit = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;
    onAddComment(postId, defaultAuthorName, text);
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Community Welcome Banner */}
      <div className="rounded-2xl bg-[#F3EFE6] border border-[#E2D9C8] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D5A45] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Chevarlar Davrasi • Hamjamiyat
          </span>
          <h2 className="font-serif-display text-2xl font-bold text-[#1E1A17]">
            Mohir Chevarlar Ko'rgazmasi
          </h2>
          <p className="text-sm text-[#6E655F] mt-1">
            O'zingiz tikkan ko'ylak, nimcha yoki bolalar kiyimini suratga olib ulashing va ustozlardan maslahat oling!
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#b04b25] text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
        >
          <Camera className="w-4 h-4" />
          Ishingizni ulashing
        </button>
      </div>

      {/* Create Post Modal / Drawer */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FBF9F5] border border-[#E2D9C8] rounded-2xl max-w-lg w-full p-5 sm:p-6 space-y-4 shadow-xl my-8">
            <div className="flex items-center justify-between border-b border-[#E2D9C8] pb-3">
              <div>
                <h3 className="font-serif-display text-xl font-bold text-[#1E1A17]">
                  Yangi tikilgan ishni ulashish
                </h3>
                <p className="text-xs text-[#6E655F]">
                  Hamjamiyatdagi chevar opa-singillarimiz bilan ijodingizni bo'lishing
                </p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 rounded-lg bg-[#F3EFE6] text-[#6E655F] hover:text-[#1E1A17]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePublish} className="space-y-4">
              {/* Photo Upload Box */}
              <div>
                <label className="block text-xs font-bold text-[#1E1A17] mb-1.5">
                  Libos surati (telefondan tanlang)
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {previewImage ? (
                  <div className="relative rounded-xl overflow-hidden h-48 border border-[#E2D9C8]">
                    <img
                      src={previewImage}
                      alt="Yuklangan rasm"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setPreviewImage('')}
                      className="absolute top-2 right-2 px-3 py-1 rounded-lg bg-black/70 text-white text-xs font-semibold"
                    >
                      Boshqa rasm tanlash
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-36 rounded-xl border-2 border-dashed border-[#C85A32]/50 bg-[#F3EFE6]/60 hover:bg-[#F3EFE6] flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-[#C85A32]">
                      Surat yuklash uchun bosing
                    </span>
                    <span className="text-xs text-[#6E655F]">
                      (Agar rasm tanlamasangiz, namuna rasm qo'yiladi)
                    </span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                    Hudud / Shahar
                  </label>
                  <input
                    type="text"
                    value={authorCity}
                    onChange={(e) => setAuthorCity(e.target.value)}
                    className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                  Tikkan libosingiz nomi *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masalan: Nabiram uchun bayramona atlas ko'ylakcha"
                  className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2.5 text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                    Qanday mato ishlatdingiz?
                  </label>
                  <input
                    type="text"
                    value={fabricUsed}
                    onChange={(e) => setFabricUsed(e.target.value)}
                    placeholder="Masalan: 2 metr shtapel"
                    className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                    Qancha vaqt ketdi?
                  </label>
                  <input
                    type="text"
                    value={timeSpent}
                    onChange={(e) => setTimeSpent(e.target.value)}
                    placeholder="Masalan: 3 soat"
                    className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1A17] mb-1">
                  Bichish va tikish таассуротларингиз *
                </label>
                <textarea
                  rows={3}
                  required
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Qanday andozadan foydalandingiz, qaysi qismi oson yoki qiziqarli bo'ldi?..."
                  className="w-full rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2.5 text-sm"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#6E655F] hover:bg-[#F3EFE6]"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#C85A32] text-white hover:bg-[#b04b25] cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Hamjamiyatga joylash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Community Feed List */}
      <div className="space-y-6">
        {posts.map((post) => {
          const isCommentsOpen = openCommentsPostId === post.id;
          return (
            <article
              key={post.id}
              className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] overflow-hidden shadow-xs"
            >
              {/* Post Author Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl text-white font-serif-display font-bold text-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: post.avatarBg }}
                  >
                    {post.authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base text-[#1E1A17]">{post.authorName}</h3>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#6E655F] bg-[#F3EFE6] px-2 py-0.5 rounded-md">
                        <MapPin className="w-3 h-3 text-[#C85A32]" />
                        {post.authorCity}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E655F]">
                      {post.authorRole} • {post.createdAt}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onToggleSave(post.id)}
                  title="Saqlab qo'yish"
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    post.isSaved
                      ? 'bg-[#3D5A45] text-white border-[#3D5A45]'
                      : 'bg-[#F3EFE6] text-[#6E655F] border-[#E2D9C8]'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Garment Photo */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full bg-[#F3EFE6] border-y border-[#E2D9C8]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1E1A17]/80 backdrop-blur-xs text-[#FBF9F5] text-xs font-medium">
                    <Layers className="w-3.5 h-3.5 text-[#E8C56B]" />
                    {post.fabricUsed}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1E1A17]/80 backdrop-blur-xs text-[#FBF9F5] text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#E8C56B]" />
                    Tikish vaqti: {post.timeSpent}
                  </span>
                </div>
              </div>

              {/* Story & Description */}
              <div className="p-4 sm:p-5 space-y-4">
                <div>
                  <h4 className="font-serif-display text-xl font-bold text-[#1E1A17]">
                    {post.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#1E1A17]/85 mt-2 leading-relaxed">
                    {post.story}
                  </p>
                </div>

                {/* Action Bar: Like & Comment */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E2D9C8]">
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => onToggleLike(post.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                        post.isLiked
                          ? 'bg-[#C85A32] text-white shadow-xs'
                          : 'bg-[#F3EFE6] text-[#1E1A17] hover:bg-[#E8E0D2]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                      <span>Barakalla ({post.likes})</span>
                    </button>

                    <button
                      onClick={() =>
                        setOpenCommentsPostId(isCommentsOpen ? null : post.id)
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#F3EFE6] text-[#1E1A17] hover:bg-[#E8E0D2] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#3D5A45]" />
                      <span>Fikrlar ({post.comments.length})</span>
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                {isCommentsOpen && (
                  <div className="pt-3 space-y-3 border-t border-dashed border-[#D8CEBE]">
                    <div className="space-y-2.5">
                      {post.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="rounded-xl bg-[#F3EFE6] p-3 text-sm space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#1E1A17]">
                              {comment.author}{' '}
                              <span className="font-normal text-xs text-[#6E655F]">
                                ({comment.city})
                              </span>
                            </span>
                            <span className="text-[11px] text-[#6E655F]">
                              {comment.createdAt}
                            </span>
                          </div>
                          <p className="text-[#1E1A17]/90">{comment.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment Input */}
                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        value={commentInputs[post.id] || ''}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({
                            ...prev,
                            [post.id]: e.target.value,
                          }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCommentSubmit(post.id);
                        }}
                        placeholder="Samimiy fikr yoki savol yozing..."
                        className="flex-1 rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C85A32]"
                      />
                      <button
                        type="button"
                        onClick={() => handleCommentSubmit(post.id)}
                        className="px-4 py-2.5 rounded-xl bg-[#3D5A45] hover:bg-[#2E6F40] text-white font-bold text-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Yuborish
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
