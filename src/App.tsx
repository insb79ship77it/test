/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, Calendar, Info, Gift, ChevronDown, ChevronUp, 
  Building2, Hash, Trophy, Sparkles, LayoutGrid, List, CreditCard 
} from "lucide-react";

interface SiteDetails {
  releaseDate: string;
  rank: string;
  businessName: string;
  businessNumber: string;
}

interface SiteInfo {
  id: string;
  name: string;
  logo: string;
  screenshot: string;
  benefits: string;
  promo: string;
  description: string;
  longDescription: string;
  url: string;
  details: SiteDetails;
}

const SITES: SiteInfo[] = [
  {
    id: "ggulfile",
    name: "꿀파일 (GGULFILE)",
    logo: "https://picsum.photos/seed/ggul/200/80",
    screenshot: "https://picsum.photos/seed/gguls/800/450",
    benefits: "10,000MB 무료제공",
    promo: "2024년 12월 신규 가입 혜택",
    description: "꿀파일은 2024년 신규사이트로, 편리한 SNS 연동 가입과 사용자 위주의 편리한 메뉴구성이 돋보이는 곳입니다.",
    longDescription: "꿀파일은 최신 기술 트렌드를 반영한 고성능 웹하드 서비스입니다. 네이버, 카카오, 구글 등 주요 SNS 계정과의 연동을 통해 단 3초 만에 가입이 가능하며, 직관적인 UI/UX를 통해 남녀노소 누구나 쉽게 자료를 찾고 다운로드할 수 있습니다. 특히 2024년 하반기 신규 오픈을 기념하여 대규모 포인트 증정 이벤트와 함께 업계 최고 수준의 업로드/다운로드 속도를 보장하고 있습니다.",
    url: "#",
    details: {
      releaseDate: "2024-12-01",
      rank: "신규 급상승 1위",
      businessName: "(주)꿀미디어",
      businessNumber: "123-45-67890"
    }
  },
  {
    id: "jinifile",
    name: "지니파일 (JINIFILE)",
    logo: "https://picsum.photos/seed/jini/200/80",
    screenshot: "https://picsum.photos/seed/jinis/800/450",
    benefits: "10,000MB 무료제공",
    promo: "출퇴근 시간 무료 이용 이벤트",
    description: "가입만해도 100% 무료다운로드가 가능한 포인트를 제공하며 다양한 출석체크 이벤트를 진행중입니다.",
    longDescription: "지니파일은 사용자 편의성을 최우선으로 생각하는 콘텐츠 공유 플랫폼입니다. 매일 진행되는 출석체크 이벤트를 통해 유료 콘텐츠를 무료로 즐길 수 있는 기회를 상시 제공하며, 특히 직장인들을 위한 출퇴근 시간 무료 스트리밍 서비스는 큰 호응을 얻고 있습니다. 고화질 영상 콘텐츠에 최적화된 뷰어를 제공하여 끊김 없는 시청 환경을 구축하였습니다.",
    url: "#",
    details: {
      releaseDate: "2024-12-15",
      rank: "종합 인기 3위",
      businessName: "(주)지니네트웍스",
      businessNumber: "234-56-78901"
    }
  },
  {
    id: "filemaru",
    name: "파일마루 (FILEMARU)",
    logo: "https://picsum.photos/seed/maru/200/80",
    screenshot: "https://picsum.photos/seed/marus/800/450",
    benefits: "10,000MB 무료제공",
    promo: "50% 반값 할인 이벤트",
    description: "2019년부터 꾸준히 사랑받는 사이트로, 깔끔한 UI와 방대한 자료량을 자랑합니다.",
    longDescription: "파일마루는 오랜 운영 노하우를 바탕으로 안정적인 서비스를 제공하는 대한민국 대표 웹하드입니다. 방대한 양의 영화, 드라마, 예능 프로그램은 물론 최신 애니메이션과 교육 자료까지 폭넓은 카테고리를 보유하고 있습니다. 철저한 저작권 관리와 클린 사이트 운영을 통해 안전한 콘텐츠 소비 문화를 선도하고 있으며, 24시간 고객센터 운영으로 사용자 불편을 최소화하고 있습니다.",
    url: "#",
    details: {
      releaseDate: "2019-01-20",
      rank: "스테디셀러 2위",
      businessName: "(주)마루콘텐츠",
      businessNumber: "345-67-89012"
    }
  },
  {
    id: "smartfile",
    name: "스마트파일 (SMARTFILE)",
    logo: "https://picsum.photos/seed/smart/200/80",
    screenshot: "https://picsum.photos/seed/smarts/800/450",
    benefits: "10,000MB 무료제공",
    promo: "포인트 충전 시 2배 적립",
    description: "새롭게 단장한 UI로 더욱 편리해졌으며, 가입 즉시 대량의 무료 다운로드를 지원합니다.",
    longDescription: "스마트파일은 '스마트한 콘텐츠 생활'을 모토로 끊임없이 진화하는 서비스입니다. 최근 대대적인 UI 개편을 통해 모바일 환경에서의 사용성을 극대화하였으며, 전용 앱을 통해 언제 어디서나 고화질 콘텐츠를 감상할 수 있습니다. 업계 최초로 도입된 지능형 검색 시스템은 사용자가 원하는 자료를 가장 빠르고 정확하게 찾아주며, 충전 금액의 2배를 적립해주는 파격적인 혜택을 제공합니다.",
    url: "#",
    details: {
      releaseDate: "2014-02-10",
      rank: "전통의 강자 5위",
      businessName: "(주)스마트소프트",
      businessNumber: "456-78-90123"
    }
  },
  {
    id: "fileis",
    name: "파일이즈 (FILEIS)",
    logo: "https://picsum.photos/seed/is/200/80",
    screenshot: "https://picsum.photos/seed/iss/800/450",
    benefits: "10,000MB 무료제공",
    promo: "모바일 무제한 스트리밍",
    description: "다양한 SNS 계정 연동으로 가입이 간편하며, 엄청난 규모의 포인트 혜택을 제공합니다.",
    longDescription: "파일이즈는 모바일 스트리밍 서비스에 특화된 차세대 콘텐츠 허브입니다. 별도의 다운로드 없이도 실시간으로 고화질 영상을 감상할 수 있는 독자적인 스트리밍 기술을 보유하고 있으며, 데이터 절약 모드를 통해 이동 중에도 부담 없이 이용 가능합니다. 또한 페이스북, 인스타그램 등 SNS 활동을 통한 포인트 적립 시스템을 구축하여 사용자가 즐겁게 참여할 수 있는 에코시스템을 만들었습니다.",
    url: "#",
    details: {
      releaseDate: "2018-01-05",
      rank: "모바일 최적화 1위",
      businessName: "(주)이즈커뮤니케이션",
      businessNumber: "567-89-01234"
    }
  }
];

type DesignMode = "modern" | "grid" | "minimal";

export default function App() {
  const [designMode, setDesignMode] = useState<DesignMode>("modern");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const today = new Date();
  const dateString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>LinkHub</span>
            </div>
            
            <div className="flex items-center gap-1 md:gap-4">
              <button 
                onClick={() => setDesignMode("modern")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  designMode === "modern" 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">메뉴 1 (모던)</span>
              </button>
              <button 
                onClick={() => setDesignMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  designMode === "grid" 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">메뉴 2 (그리드)</span>
              </button>
              <button 
                onClick={() => setDesignMode("minimal")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  designMode === "minimal" 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">메뉴 3 (미니멀)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.header 
          key={designMode + "header"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-600">{dateString}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Premium <span className="text-indigo-600">Link Hub</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {designMode === "modern" && "세련된 카드 레이아웃으로 확인하는 프리미엄 서비스"}
            {designMode === "grid" && "한눈에 들어오는 그리드 뷰로 즐기는 시각적 탐색"}
            {designMode === "minimal" && "핵심 정보에 집중한 깔끔한 리스트 스타일"}
          </p>
        </motion.header>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {designMode === "modern" && (
            <motion.div 
              key="modern-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {SITES.map((site, index) => (
                <div key={site.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-shadow-hover">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="w-full md:w-48 flex-shrink-0">
                        <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center aspect-[2/1] border border-slate-100">
                          <img src={site.logo} alt={site.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-1 hover:text-indigo-600 transition-colors cursor-pointer">{site.name}</h2>
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                <Sparkles className="w-3 h-3" /> {site.benefits}
                              </span>
                              <span className="text-xs font-medium text-slate-400">{site.promo}</span>
                            </div>
                          </div>
                          <a href={site.url} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
                            사이트 방문 <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">{site.description}</p>
                        <button onClick={() => toggleExpand(site.id)} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                          {expandedId === site.id ? <>상세 정보 닫기 <ChevronUp className="w-4 h-4" /></> : <>자세히 보기 <ChevronDown className="w-4 h-4" /></>}
                        </button>
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedId === site.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="mb-10 space-y-6">
                              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                <img src={site.screenshot} alt={site.name} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"><Info className="w-5 h-5 text-indigo-600" /> 서비스 상세 설명</h3>
                                <p className="text-slate-600 leading-relaxed whitespace-pre-line">{site.longDescription}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              <DetailItem icon={<Calendar className="w-4 h-4" />} label="출시일" value={site.details.releaseDate} />
                              <DetailItem icon={<Trophy className="w-4 h-4" />} label="인기 순위" value={site.details.rank} />
                              <DetailItem icon={<Building2 className="w-4 h-4" />} label="사업체명" value={site.details.businessName} />
                              <DetailItem icon={<Hash className="w-4 h-4" />} label="사업자 번호" value={site.details.businessNumber} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {designMode === "grid" && (
            <motion.div 
              key="grid-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {SITES.map((site, index) => (
                <div key={site.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col group card-shadow-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={site.screenshot} alt={site.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <a href={site.url} className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-center shadow-xl">사이트 바로가기</a>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl p-2 border border-slate-100 flex-shrink-0">
                        <img src={site.logo} alt={site.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{site.name}</h2>
                    </div>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">{site.description}</p>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-indigo-600 font-bold text-sm">{site.benefits}</span>
                      <button onClick={() => toggleExpand(site.id)} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedId === site.id ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {expandedId === site.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pt-6 space-y-4">
                            <p className="text-slate-600 text-sm leading-relaxed">{site.longDescription}</p>
                            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <div><p className="text-[10px] text-slate-400 uppercase font-bold">출시일</p><p className="text-xs font-bold">{site.details.releaseDate}</p></div>
                              <div><p className="text-[10px] text-slate-400 uppercase font-bold">인기순위</p><p className="text-xs font-bold">{site.details.rank}</p></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {designMode === "minimal" && (
            <motion.div 
              key="minimal-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 divide-y divide-slate-100 shadow-xl"
            >
              {SITES.map((site) => (
                <div key={site.id} className="group">
                  <div className="p-6 flex items-center gap-6 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => toggleExpand(site.id)}>
                    <div className="w-10 h-10 bg-slate-50 rounded-lg p-1.5 border border-slate-100 flex-shrink-0">
                      <img src={site.logo} alt={site.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{site.name}</h3>
                      <p className="text-xs text-slate-400">{site.benefits} • {site.promo}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href={site.url} 
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-1.5" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        바로가기 <ExternalLink className="w-3 h-3" />
                      </a>
                      <ChevronDown className={`w-4 h-4 text-slate-300 transition-transform ${expandedId === site.id ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedId === site.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-slate-50/50">
                        <div className="px-6 pb-8 pt-2 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-xl overflow-hidden border border-slate-200">
                              <img src={site.screenshot} alt={site.name} className="w-full h-auto" referrerPolicy="no-referrer" />
                            </div>
                            <div className="space-y-4">
                              <p className="text-sm text-slate-600 leading-relaxed">{site.longDescription}</p>
                              <div className="space-y-2">
                                <p className="text-xs"><span className="text-slate-400 font-medium">사업체:</span> <span className="text-slate-700 font-bold">{site.details.businessName}</span></p>
                                <p className="text-xs"><span className="text-slate-400 font-medium">순위:</span> <span className="text-slate-700 font-bold">{site.details.rank}</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-slate-200 text-center bg-white">
        <p className="text-slate-400 text-sm mb-2">
          © {today.getFullYear()} Premium Link Hub. Crafted for excellence.
        </p>
        <p className="text-slate-300 text-xs max-w-md mx-auto">
          본 사이트는 정보 제공을 목적으로 하며, 각 서비스의 이용 약관을 반드시 확인하시기 바랍니다.
        </p>
      </footer>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-slate-400 mb-1">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-slate-900 font-medium">{value}</p>
    </div>
  );
}
