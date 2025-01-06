import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { ConfirmationModal } from "../../components/ModalCon/ConfirmationModal";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { api } from "../../lib/axios";

export function Transactions() {
  const { transactions, fetchTransactions } = useContext(TransactionsContext);
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(transactionId: number) {
    setTransactionToDelete(transactionId);
    setIsModalOpen(true);
  }

  function closeModal() {
    setTransactionToDelete(null);
    setIsModalOpen(false);
  }

  async function handleDeleteTransaction() {
    if (transactionToDelete !== null) {
      await api.delete(`/transactions/${transactionToDelete}`);
      setTransactionToDelete(null);
      setIsModalOpen(false);
      await fetchTransactions();
    }
  }

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td>
                  <button
                    onClick={() => openModal(transaction.id)}
                    title="Deletar Transação">
                    <Trash size={20}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <ConfirmationModal
        title="Confirmar Exclusão"
        description="Tem certeza que deseja deletar esta transação? Esta ação não poderá ser desfeita."
        isOpen={isModalOpen}
        onCancel={closeModal}
        onConfirm={handleDeleteTransaction}
      />
    </div>
  );
}
