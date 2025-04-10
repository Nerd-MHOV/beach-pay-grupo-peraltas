import { exec, ExecException } from "child_process";
function checkPostgres() {
  exec(
    "docker exec beach-pay.postgres-dev pg_isready --host localhost",
    handleReturn
  );

  function handleReturn(error: ExecException | null, stdout: string) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
