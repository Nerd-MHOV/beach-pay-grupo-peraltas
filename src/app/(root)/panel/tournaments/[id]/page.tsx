import { Header } from "@/components/Header";
import { format } from "date-fns";
import { getTournamentById } from "../actions";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ptBR } from "date-fns/locale";
import FormTournament from "../form-tournament";
import TableTournamentDescription from "./table-tournament-description";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const tournament = await getTournamentById(id);

  if (!tournament) {
    return notFound();
  }

  const TotalInvestments = Number(
    tournament.investment_group.reduce(
      (acc, curr) =>
        acc + curr.investments.reduce((acci, curri) => acci + curri.value, 0),
      0
    )
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const participants: string[] = tournament.investment_group.reduce(
    (acc: string[], curr) => {
      if (!acc.includes(curr.athlete_id)) {
        return [...acc, curr.athlete_id];
      }
      return acc;
    },
    []
  );

  return (
    <div className="px-2 sm:px-10 py-3 relative grid grid-cols gap-5">
      <Header.Root>
        <Header.Title
          subtitle={`${tournament.arena.name} - ${tournament.arena.address.city_state}`}
        >
          <div>
            {tournament.name}
            <p className="text-gray-400 text-sm">
              {format(tournament.date_from, "dd MMM", { locale: ptBR })} à{" "}
              {format(tournament.date_to, "dd MMM yy", { locale: ptBR })}
            </p>
          </div>
        </Header.Title>
        <Header.Content>
          <div className="flex flex-col justify-end items-end space-x-2">
            <span className="text-sm text-gray-400">
              criado em: {format(tournament.created_at, "dd/MM/yyyy HH:ii")}
            </span>
            <span className="text-sm text-gray-400">
              última atualização:{" "}
              {format(tournament.updated_at, "dd/MM/yyyy HH:ii")}
            </span>
          </div>
        </Header.Content>
      </Header.Root>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-background border-none shadow-lg select-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Investido
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{TotalInvestments}</div>
            <p className="text-xs text-muted-foreground">No Torneio</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-none shadow-lg select-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Atletas Participantes
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{participants.length}</div>
            <p className="text-xs text-muted-foreground">No Torneio</p>
          </CardContent>
        </Card>
      </div>

      <TableTournamentDescription tournament={tournament} />

      <div className="bg-white p-7 rounded-xl shadow-lg">
        <FormTournament tournament={tournament} />
      </div>
    </div>
  );
};

export default Page;
