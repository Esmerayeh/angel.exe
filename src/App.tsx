import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GothicNav from "@/components/GothicNav";
import GrainOverlay from "@/components/GrainOverlay";
import Sparkles from "@/components/Sparkles";
import AngelBackground from "@/components/AngelBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import HallOfSelves from "./pages/HallOfSelves";
import MusicSanctuary from "./pages/MusicSanctuary";
import CinemaMania from "./pages/CinemaMania";
import DiaryPlaceholder from "./pages/DiaryPlaceholder";
import MediaArchive from "./pages/MediaArchive";
import AnimeShrine from "./pages/AnimeShrine";
import Instruments from "./pages/Instruments";
import ThoughtFiles from "./pages/ThoughtFiles";
import NightmareInterface from "./pages/NightmareInterface";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AngelBackground />
        <GothicNav />
        <GrainOverlay />
        <Sparkles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hall-of-selves" element={<HallOfSelves />} />
          <Route path="/music" element={<MusicSanctuary />} />
          <Route path="/cinema" element={<CinemaMania />} />
          <Route path="/diary" element={<DiaryPlaceholder />} />
          <Route path="/archive" element={<MediaArchive />} />
          <Route path="/anime-shrine" element={<AnimeShrine />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/thoughts" element={<ThoughtFiles />} />
          <Route path="/nightmare" element={<NightmareInterface />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
