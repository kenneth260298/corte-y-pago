CREATE TABLE cards (
                       id           UUID         PRIMARY KEY,
                       user_id      VARCHAR(128) NOT NULL,
                       alias        VARCHAR(80)  NOT NULL,
                       bank         VARCHAR(40)  NOT NULL,
                       brand        VARCHAR(20)  NOT NULL CHECK (brand IN ('VISA', 'MASTERCARD', 'AMEX', 'OTHER')),
                       last_digits  VARCHAR(4)   NOT NULL CHECK (last_digits ~ '^[0-9]{3,4}$'),
    type         VARCHAR(10)  NOT NULL CHECK (type IN ('CREDIT', 'DEBIT')),
    cutoff_day   SMALLINT     CHECK (cutoff_day BETWEEN 1 AND 31),
    due_day      SMALLINT     CHECK (due_day BETWEEN 1 AND 31),
    active       BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at   TIMESTAMPTZ  NOT NULL DEFAULT now(),
    CONSTRAINT uq_cards_user_bank_digits UNIQUE (user_id, bank, last_digits),
    CONSTRAINT ck_cards_alias_no_pan CHECK (alias !~ '([0-9][ -]?){12,}'),
    CONSTRAINT ck_cards_credit_days CHECK (type = 'DEBIT' OR (cutoff_day IS NOT NULL AND due_day IS NOT NULL))
);