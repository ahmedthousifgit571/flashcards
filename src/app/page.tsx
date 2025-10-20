import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Users, 
  BarChart3, 
  BookOpen, 
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Learning
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Master Any Subject
              <br />
              <span className="text-4xl md:text-5xl">with Smart Flashcards</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your learning experience with intelligent flashcards that adapt to your pace. 
              Study smarter, remember longer, and achieve your goals faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Setup in 2 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our Flashcards?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to maximize your learning potential and retention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Spaced Repetition</CardTitle>
                <CardDescription className="text-base">
                  Our AI algorithm determines the optimal time to review each card based on your performance
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription className="text-base">
                  Study anywhere, anytime with our responsive design and offline capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Collaborative Learning</CardTitle>
                <CardDescription className="text-base">
                  Share decks with friends, join study groups, and learn together
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Progress Tracking</CardTitle>
                <CardDescription className="text-base">
                  Detailed analytics and insights to track your learning progress and identify weak areas
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Rich Content</CardTitle>
                <CardDescription className="text-base">
                  Support for text, images, audio, and even LaTeX for complex mathematical formulas
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Goal-Oriented</CardTitle>
                <CardDescription className="text-base">
                  Set learning goals, track milestones, and celebrate achievements along your journey
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1M+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10M+</div>
              <div className="text-blue-100">Flashcards Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">95%</div>
              <div className="text-blue-100">Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">4.9</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-current" />
                User Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already improved their study habits and achieved better results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
