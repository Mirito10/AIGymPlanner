import { Link, Navigate } from "react-router-dom";
import {
  Zap,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: Sparkles,
    title: "AI-Assisted Food Logging",
    description:
      "Register meals faster with photo-based food analysis and automatic nutritional estimation.",
  },
  {
    icon: Target,
    title: "Personalized Health Goals",
    description:
      "Track your progress based on your profile, biometric data, and nutrition or fitness objectives.",
  },
  {
    icon: Calendar,
    title: "Daily Progress Tracking",
    description:
      "Monitor meals, activity, and health metrics through clear daily summaries and historical records.",
  },
  {
    icon: Clock,
    title: "Professional Follow-Up",
    description:
      "Support collaboration between clients, nutritionists, and trainers with updated progress insights.",
  },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to profile
  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] mb-8">
            <Zap className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-muted)]">
              Smart health and nutrition tracking
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Smarter
            <br />
            <span className="text-[var(--color-accent)]">Health Tracker</span> 
          </h1>

          <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
            Track your meals, activity, and progress in one place. VitaUno helps
            users and professionals make better health decisions with clear data
            and AI-assisted tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="secondary" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why VitaUno?</h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              VitaUno connects nutrition, activity tracking, and health progress
              into a single platform designed for both users and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="bordered"
                className="group hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--color-muted)] text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}