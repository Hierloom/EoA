type EoA = {
  abilities?: Record<string, string>
  abilityAbbreviations?: Record<string, string>
};

export let EoA: EoA  = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
EoA.abilities = {
  str: 'EOA.Ability.Str.long',
  dex: 'EOA.Ability.Dex.long',
  con: 'EOA.Ability.Con.long',
  int: 'EOA.Ability.Int.long',
  wis: 'EOA.Ability.Wis.long',
  cha: 'EOA.Ability.Cha.long',
  san: 'EOA.Ability.San.long',
};

EoA.abilityAbbreviations = {
  str: 'EOA.Ability.Str.abbr',
  dex: 'EOA.Ability.Dex.abbr',
  con: 'EOA.Ability.Con.abbr',
  int: 'EOA.Ability.Int.abbr',
  wis: 'EOA.Ability.Wis.abbr',
  cha: 'EOA.Ability.Cha.abbr',
  san: 'EOA.Ability.San.abbr',
};
