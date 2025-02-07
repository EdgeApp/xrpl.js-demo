import * as dotenv from "dotenv"
import { Currency } from "xrpl/dist/npm/models/common"
import { WALLET_1 } from "./wallets"
import { getXrplClient } from "./xrpl-client"

dotenv.config()

// Issued Currency that you want to use in your TrustSet or Payment transactions for example.
// Create a TOKEN field in your .env file. If TOKEN is not present, it will default to "TEST_TOKEN".
const TOKEN = process.env.TOKEN ?? "TEST_TOKEN"

const main = async () => {
  // Do not comment
  await getXrplClient().connect()

  /**
   *  ____                                  _
   * |  _ \ __ _ _   _ _ __ ___   ___ _ __ | |_ ___
   * | |_) / _` | | | | '_ ` _ \ / _ \ '_ \| __/ __|
   * |  __/ (_| | |_| | | | | | |  __/ | | | |_\__ \
   * |_|   \__,_|\__, |_| |_| |_|\___|_| |_|\__|___/
   *             |___/
   */

  /**
   * Send a Payment
   *
   * https://xrpl.org/payment.html
   *
   * IMPORTANT: Write the IOU currency as a string, for example "MY_TOKEN", no need to convert it to HEX (it will be done in the function directly).
   * IMPORTANT 2: Write the XRP amount, not the drop amount. The XRP amount will be automatically converted to drops in the function.
   * --------------------------------------------------
   */
  // await sendPayment(
  //   {
  //     Destination: WALLET_2.address,
  //     // Amount: "1",
  //     Amount: {
  //       value: "100000",
  //       currency: TOKEN,
  //       issuer: WALLET_1.address,
  //     },
  //   },
  //   { wallet: WALLET_1 }
  // )

  /**
   *  _   _ _____ _____
   * | \ | |  ___|_   _|__
   * |  \| | |_    | |/ __|
   * | |\  |  _|   | |\__ \
   * |_| \_|_|     |_||___/
   *
   */

  /**
   * Mint an NFT
   *
   * https://xrpl.org/nftokenmint.html
   * --------------------------------------------------
   */
  // await mintNft(
  //   {
  //     URI: "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
  //     NFTokenTaxon: 0,
  //   },
  //   { wallet: WALLET_1 }
  // )

  /**
   * Create an NFT offer
   *
   * https://xrpl.org/nftokencreateoffer.html
   * --------------------------------------------------
   */
  // await createNftOffer(
  //   {
  //     Amount: "10",
  //     // Flags: NFTokenCreateOfferFlags.tfSellNFToken,
  //     Owner: "r...", // Can also be WALLET_2.address for example.
  //     NFTokenID: "...",
  //   },
  //   { wallet: WALLET_1 }
  // )

  /**
   * Accept an NFT offer
   *
   * https://xrpl.org/nftokenacceptoffer.html
   * --------------------------------------------------
   */
  // await acceptNftOffer(
  //   {
  //     // NFTokenBuyOffer: "...",
  //     NFTokenSellOffer: "...",
  //   },
  //   { wallet: WALLET_2 }
  // )

  /**
   * Cancel an NFT offer
   *
   * https://xrpl.org/nftokencanceloffer.html
   * --------------------------------------------------
   */
  // await cancelNftOffer(
  //   {
  //     NFTokenOffers: ["..."],
  //   },
  //   { wallet: WALLET_1 }
  // )

  /**
   *  _____               _   _ _
   * |_   _| __ _   _ ___| |_| (_)_ __   ___  ___
   *   | || '__| | | / __| __| | | '_ \ / _ \/ __|
   *   | || |  | |_| \__ \ |_| | | | | |  __/\__ \
   *   |_||_|   \__,_|___/\__|_|_|_| |_|\___||___/
   */

  /**
   * Create a trustline (to be able to hold a different token than XRP).
   * https://xrpl.org/trustset.html
   *
   * IMPORTANT: Write the IOU currency as a string, for example "MY_TOKEN", no need to convert it to HEX (it will be done in the function directly).
   * --------------------------------------------------
   */
  // await createTrustline(
  //   {
  //     Flags: TrustSetFlags.tfSetNoRipple,
  //     LimitAmount: {
  //       issuer: WALLET_1.address,
  //       // No need to convert the currency into hex, this is taken care of in the function itself. Just write your currency "DEMO_TOKEN" for example.
  //       currency: TOKEN,
  //       value: "30000000",
  //     },
  //   },
  //   { wallet: WALLET_2 }
  // )

  /**
   *  ____  _______  __
   * |  _ \| ____\ \/ /
   * | | | |  _|  \  /
   * | |_| | |___ /  \
   * |____/|_____/_/\_\
   */

  // await lookupOffers(
  //   {
  //     weWant: { currency: TOKEN, issuer: WALLET_1.address },
  //     weWantAmount: "1000000000000",
  //     weSpend: { currency: "XRP" },
  //     weSpendAmount: "70",
  //   },
  //   { wallet: WALLET_3, showLogs: false }
  // )

  // await getBuyQuote(
  //   {
  //     weWant: {
  //       currency: "USD",
  //       issuer: GATEHUB_ISSUER_ADDRESSES.USD, // WALLET_1.address,
  //     },
  //     weWantAmountOfToken: 50,
  //     counterCurrency: {
  //       currency: "XRP",
  //       // issuer: GATEHUB_ISSUER_ADDRESSES.USD,
  //     },
  //     taker: WALLET_3.address,
  //   },
  //   { showLogs: false }
  // )

  // await getSellQuote(
  //   {
  //     weSell: {
  //       currency: "XRP",
  //       //issuer: GATEHUB_ISSUER_ADDRESSES.USD,
  //     },
  //     weSellAmountOfTokens: 50,
  //     counterCurrency: {
  //       currency: "USD",
  //       issuer: GATEHUB_ISSUER_ADDRESSES.USD, // Gatehub USD issuing address
  //     },
  //     taker: WALLET_2.address,
  //   },
  //   { showLogs: false }
  // )

  // await createOffer(
  //   {
  //     // This is what the account accepting the offer will pay the `wallet` address (2nd argument to this createOffer).
  //     TakerPays: {
  //       issuer: WALLET_1.address,
  //       currency: TOKEN,
  //       value: "50",
  //     },
  //     // This is what the account accepting the offer will receive by the `wallet` address (2nd argument to this createOffer).
  //     TakerGets: {
  //       issuer: WALLET_1.address,
  //       currency: "DEX_TOKEN",
  //       value: "89",
  //     },
  //   },
  //   { wallet: WALLET_2 }
  // )

  // await cancelOffer({ OfferSequence: 38398319 }, { wallet: WALLET_2 })

  /**
   *     _                             _   ____       _
   *    / \   ___ ___ ___  _   _ _ __ | |_/ ___|  ___| |_
   *   / _ \ / __/ __/ _ \| | | | '_ \| __\___ \ / _ \ __|
   *  / ___ \ (_| (_| (_) | |_| | | | | |_ ___) |  __/ |_
   * /_/   \_\___\___\___/ \__,_|_| |_|\__|____/ \___|\__|
   */

  /**
   * Create an AccountSet.
   *
   * https://xrpl.org/accountset.html
   * --------------------------------------------------
   */
  // await accountSet({ SetFlag: AccountSetAsfFlags.asfRequireAuth }, { wallet: WALLET_1 })

  /**
   *   _____
   *  | ____|___  ___ _ __ _____      _____
   *  |  _| / __|/ __| '__/ _ \ \ /\ / / __|
   *  | |___\__ \ (__| | | (_) \ V  V /\__ \
   *  |_____|___/\___|_|  \___/ \_/\_/ |___/
   */

  // await createEscrow(
  //   {
  //     Amount: "5", // in XRP
  //     // Condition: generateConditionAndFulfillment().condition, // Optional
  //     Destination: WALLET_2.address,
  //     FinishAfter: isoTimeToRippleTime(dayjs().add(1, "minute").toDate()),
  //   },
  //   { wallet: WALLET_1 }
  // )

  // await finishEscrow(
  //   {
  //     // Condition: "A02580205E2935435865EA7049B17812CFF41EFFCD8B7CD92D1F6FB57D6D61BDF48795AA810120", // Optional
  //     // Fulfillment: "A0228020E7EE88B735FDFD0578B961B0D7649672124C73912536D4B3902CB38677EE80BF", // Optional
  //     Owner: WALLET_1.address,
  //     OfferSequence: 1538416,
  //   },
  //   { wallet: WALLET_2 }
  // )

  // await cancelEscrow(
  //   {
  //     Owner: WALLET_1.address,
  //     OfferSequence: 1538316,
  //   },
  //   { wallet: WALLET_1 }
  // )

  /**
   *     _    __  __ __  __
   *    / \  |  \/  |  \/  |
   *   / _ \ | |\/| | |\/| |
   *  / ___ \| |  | | |  | |
   * /_/   \_\_|  |_|_|  |_|
   *
   * Attention
   * Automated Market Maker (AMM) functionality is part of the proposed XLS-30d extension to the XRP Ledger protocol.
   * You can use these functions on AMM test networks, but there isn't an official amendment and they aren't available on the production Mainnet.
   */

  // Update accordingly
  const asset: Currency = {
    currency: "XRP",
  }

  // Update accordingly
  const asset2: Currency = {
    currency: TOKEN,
    issuer: WALLET_1.address,
  }

  // await createAMM(
  //   {
  //     Amount: "1000",
  //     Amount2: {
  //       issuer: WALLET_1.address,
  //       currency: TOKEN,
  //       value: "2000",
  //     },
  //     TradingFee: 500,
  //   },
  //   {
  //     wallet: WALLET_2,
  //   }
  // )

  // await bidAMM(
  //   {
  //     Asset: asset,
  //     Asset2: asset2,
  //     BidMin: "1000",
  //   },
  //   { wallet: WALLET_3 }
  // )

  // await depositInAMM(
  //   {
  //     Asset: asset,
  //     Amount: {
  //       currency: TOKEN,
  //       issuer: WALLET_1.address,
  //       value: "10000",
  //     },
  //     Asset2: asset2,
  //     Flags: AMMDepositFlags.tfSingleAsset,
  //   },
  //   { wallet: WALLET_3 }
  // )

  // await voteInAMM(
  //   {
  //     TradingFee: 600,
  //     Asset: asset,
  //     Asset2: asset2,
  //   },
  //   { wallet: WALLET_3 }
  // )

  // await withdrawFromAMM(
  //   {
  //     Asset: asset,
  //     Asset2: asset2,
  //     Amount: { currency: TOKEN, issuer: WALLET_1.address, value: "10" },
  //     Flags: AMMWithdrawFlags.tfSingleAsset,
  //   },
  //   { wallet: WALLET_3 }
  // )

  /**
   *     _                             _       __  __      _   _               _
   *    / \   ___ ___ ___  _   _ _ __ | |_    |  \/  | ___| |_| |__   ___   __| |___
   *   / _ \ / __/ __/ _ \| | | | '_ \| __|   | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
   *  / ___ \ (_| (_| (_) | |_| | | | | |_    | |  | |  __/ |_| | | | (_) | (_| \__ \
   * /_/   \_\___\___\___/ \__,_|_| |_|\__|   |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
   */

  // await getAccountCurrencies({ account: WALLET_3.address, command: "account_currencies" })

  // await getAccountInfo({ account: WALLET_1.address, command: "account_info" })

  // await getAccountNfts({ account: WALLET_1.address, command: "account_nfts" })

  // await getAccountLines({ account: WALLET_2.address, command: "account_lines" })

  // await getAccountOffers({ account: WALLET_1.address, command: "account_offers" })

  // await getAccountObjects({ account: WALLET_3.address, command: "account_objects" })

  /**
   *     _    __  __ __  __        __  __      _   _               _
   *    / \  |  \/  |  \/  |      |  \/  | ___| |_| |__   ___   __| |___
   *   / _ \ | |\/| | |\/| |      | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
   *  / ___ \| |  | | |  | |      | |  | |  __/ |_| | | | (_) | (_| \__ \
   * /_/   \_\_|  |_|_|  |_|      |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
   */
  // await getAMMInfo({
  //   command: "amm_info",
  //   asset: { currency: "XRP" },
  //   asset2: { issuer: WALLET_1.address, currency: TOKEN },
  // })

  /**
   *  ____                             __  __      _   _               _
   * / ___|  ___ _ ____   _____ _ __  |  \/  | ___| |_| |__   ___   __| |___
   * \___ \ / _ \ '__\ \ / / _ \ '__| | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
   *  ___) |  __/ |   \ V /  __/ |    | |  | |  __/ |_| | | | (_) | (_| \__ \
   * |____/ \___|_|    \_/ \___|_|    |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
   */

  // await getServerState()

  /**
   *    ____ _ _         __  __      _   _               _
   *   / ___| (_) ___   |  \/  | ___| |_| |__   ___   __| |___
   *  | |   | | |/ _ \  | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
   *  | |___| | | (_) | | |  | |  __/ |_| | | | (_) | (_| \__ \
   *   \____|_|_|\___/  |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
   */
  // await getNftInfo({ nft_id: "" })

  // await getNftHistory({
  //   nft_id: "",
  // })

  /**
   *  ____              _               __  __
   * | __ )  ___   ___ | | __     ___  / _|/ _| ___ _ __ ___
   * |  _ \ / _ \ / _ \| |/ /    / _ \| |_| |_ / _ \ '__/ __|
   * | |_) | (_) | (_) |   <    | (_) |  _|  _|  __/ |  \__ \
   * |____/ \___/ \___/|_|\_\    \___/|_| |_|  \___|_|  |___/
   */

  // await getBookOffers({
  //   command: "book_offers",
  //   taker_gets: {
  //     currency: "XRP",
  //   },
  //   taker_pays: {
  //     currency: TOKEN,
  //     issuer: WALLET_1.address,
  //   },
  // })

  // Do not comment, disconnect the client
  await getXrplClient().disconnect()
}

// Will run the main function above. Do not comment.
main()
