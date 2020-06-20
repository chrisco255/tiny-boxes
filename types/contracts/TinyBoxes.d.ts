/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class TinyBoxes extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxes;
  methods: {
    ANIMATION_COUNT(): TransactionObject<string>;

    ARTIST_PRINTS(): TransactionObject<string>;

    TOKEN_LIMIT(): TransactionObject<string>;

    approve(to: string, tokenId: number | string): TransactionObject<void>;

    balanceOf(owner: string): TransactionObject<string>;

    baseURI(): TransactionObject<string>;

    createBox(
      seed: string,
      counts: (number | string)[],
      dials: (number | string)[],
      switches: boolean[]
    ): TransactionObject<void>;

    creator(): TransactionObject<string>;

    currentPrice(): TransactionObject<string>;

    getApproved(tokenId: number | string): TransactionObject<string>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): TransactionObject<boolean>;

    name(): TransactionObject<string>;

    ownerOf(tokenId: number | string): TransactionObject<string>;

    perpetualRenderer(
      _id: number | string,
      seed: string,
      counts: (number | string)[],
      dials: (number | string)[],
      switches: boolean[],
      animation: number | string,
      frame: number | string
    ): TransactionObject<string>;

    priceAt(_id: number | string): TransactionObject<string>;

    safeTransferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): TransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): TransactionObject<boolean>;

    symbol(): TransactionObject<string>;

    tokenAnimation(_id: number | string): TransactionObject<string>;

    tokenArt(_id: number | string): TransactionObject<string>;

    tokenByIndex(index: number | string): TransactionObject<string>;

    tokenCounts(_id: number | string): TransactionObject<string[]>;

    tokenData(
      _id: number | string
    ): TransactionObject<{
      seed: string;
      animation: string;
      counts: string[];
      dials: string[];
      switches: boolean[];
      0: string;
      1: string;
      2: string[];
      3: string[];
      4: boolean[];
    }>;

    tokenDials(_id: number | string): TransactionObject<string[]>;

    tokenFrame(
      _id: number | string,
      _frame: number | string
    ): TransactionObject<string>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string
    ): TransactionObject<string>;

    tokenSeed(_id: number | string): TransactionObject<string>;

    tokenSwitches(_id: number | string): TransactionObject<boolean[]>;

    tokenURI(tokenId: number | string): TransactionObject<string>;

    totalSupply(): TransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;
  };
  events: {
    Approval: ContractEvent<{
      owner: string;
      approved: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    ApprovalForAll: ContractEvent<{
      owner: string;
      operator: string;
      approved: boolean;
      0: string;
      1: string;
      2: boolean;
    }>;
    Transfer: ContractEvent<{
      from: string;
      to: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
