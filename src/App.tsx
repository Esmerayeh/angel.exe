import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GothicNav from "@/components/GothicNav";
import GrainOverlay from "@/components/GrainOverlay";
import Sparkles from "@/components/Sparkles";
import Home from "./pages/Home";
import About from "./pages/About";
import HallOfSelves from "./pages/HallOfSelves";
import MusicSanctuary from "./pages/MusicSanctuary";
import ThoughtFiles from "./pages/ThoughtFiles";
import DiaryPlaceholder from "./pages/DiaryPlaceholder";
import MediaArchive from "./pages/MediaArchive";
import CharacterRoom from "./pages/CharacterRoom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GothicNav />
        <GrainOverlay />
        <Sparkles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hall-of-selves" element={<HallOfSelves />} />
          <Route path="/music" element={<MusicSanctuary />} />
          <Route path="/diary" element={<DiaryPlaceholder />} />
          <Route path="/archive" element={<MediaArchive />} />
          <Route path="/thoughts" element={<ThoughtFiles />} />
          <Route path="/characters" element={<CharacterRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
