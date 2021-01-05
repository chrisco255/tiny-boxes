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

export class TinyBoxesRenderer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxesRenderer;
  methods: {
    ANIMATION_COUNT(): TransactionObject<string>;

    perpetualRenderer(
      box: {
        color: {
          hue: number | string;
          saturation: number | string;
          lightness: number | string;
        };
        contrast: number | string;
        shapes: number | string;
        hatching: number | string;
        size: (number | string)[];
        spacing: (number | string)[];
        mirroring: number | string;
        scheme: number | string;
        shades: number | string;
        animation: number | string;
      },
      randomness: number | string,
      animate: boolean,
      props: (number | string)[],
      owner: string
    ): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
