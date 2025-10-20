import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Plus, BarChart3, Clock, Target } from 'lucide-react'
import { db } from '@/db'
import { cardsTable, decksTable } from '@/db/schema'
import { desc, eq, sql } from 'drizzle-orm'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/')
  }

  // Fetch user-scoped data
  const [totalDecksRes, totalCardsRes, recentDecks] = await Promise.all([
    db
      .select({ count: sql`count(*)` })
      .from(decksTable)
      .where(eq(decksTable.userId, userId)),
    db
      .select({ count: sql`count(*)` })
      .from(cardsTable)
      .innerJoin(decksTable, eq(cardsTable.deckId, decksTable.id))
      .where(eq(decksTable.userId, userId)),
    db
      .select()
      .from(decksTable)
      .where(eq(decksTable.userId, userId))
      .orderBy(desc(decksTable.createdAt))
      .limit(5),
  ])

  const totalDecks = Number(totalDecksRes?.[0]?.count ?? 0)
  const totalCards = Number(totalCardsRes?.[0]?.count ?? 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Your Dashboard
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Overview of your decks and cards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Total Decks
              </CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalDecks}</div>
              <p className="text-xs text-blue-600 dark:text-blue-400">Decks you created</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-600 dark:text-green-400">
                Total Cards
              </CardTitle>
              <Target className="h-4 w-4 text-green-600 dark:text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">{totalCards}</div>
              <p className="text-xs text-green-600 dark:text-green-400">Across your decks</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Recent Decks
              </CardTitle>
              <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{recentDecks.length}</div>
              <p className="text-xs text-purple-600 dark:text-purple-400">Last 5 created</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Actions
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="mr-2 h-4 w-4" />
                Create New Deck
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Decks
                </CardTitle>
                <CardDescription>Your latest created decks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentDecks.length === 0 ? (
                  <div className="text-sm text-slate-600 dark:text-slate-400">No decks yet. Create your first deck!</div>
                ) : (
                  recentDecks.map((deck) => (
                    <div key={deck.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <p className="font-medium">{deck.title}</p>
                        {deck.description ? (
                          <p className="text-sm text-slate-600 dark:text-slate-400">{deck.description}</p>
                        ) : null}
                      </div>
                      <Badge variant="secondary">{new Date(deck.createdAt).toLocaleDateString()}</Badge>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start creating content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Deck
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
