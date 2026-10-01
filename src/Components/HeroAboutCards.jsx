export default function HeroAboutCards() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="glass-card p-6">
          <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block"></i>
          <div className="text-3xl font-bold gradient-text mb-1">+2مليون</div>
          <div className="text-sm text-neutral-500">قارئ شهرياً</div>
        </div>
        <div className="glass-card p-6">
          <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block"></i>
          <div className="text-3xl font-bold gradient-text mb-1">+500</div>
          <div className="text-sm text-neutral-500">مقالة منشورة</div>
        </div>
        <div className="glass-card p-6">
          <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block"></i>
          <div className="text-3xl font-bold gradient-text mb-1">+50</div>
          <div className="text-sm text-neutral-500">كاتب خبير</div>
        </div>
        <div className="glass-card p-6">
          <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block"></i>
          <div className="text-3xl font-bold gradient-text mb-1">+15</div>
          <div className="text-sm text-neutral-500">تصنيف</div>
        </div>
      </div>
    </>
  );
}
