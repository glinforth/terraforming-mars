import {expect} from 'chai';
import {LunarMagnate} from '../../src/server/moon/LunarMagnate';
import {MoonExpansion} from '../../src/server/moon/MoonExpansion';
import {TestPlayer} from '../TestPlayer';
import {TileType} from '../../src/common/TileType';
import {testGame} from '../TestGame';
import {IGame} from '../../src/server/IGame';

describe('LunarMagnate', () => {
  let player: TestPlayer;
  let game: IGame;
  let otherPlayer: TestPlayer;

  beforeEach(() => {
    [game, player, otherPlayer] = testGame(2, {moonExpansion: true});
  });

  it('Basic test', () => {
    const award = new LunarMagnate();
    expect(award.getScore(player)).eq(0);
    MoonExpansion.addTile(player, 'm01', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(1);
    MoonExpansion.addTile(player, 'm02', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(2);
    MoonExpansion.addTile(player, 'm03', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(3);
    MoonExpansion.addTile(player, 'm04', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(4);
    MoonExpansion.addTile(player, 'm05', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(5);
    MoonExpansion.addTile(player, 'm06', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(6);

    expect(award.getScore(otherPlayer)).eq(0);
    MoonExpansion.addTile(otherPlayer, 'm07', {tileType: TileType.MOON_MINE});
    expect(award.getScore(player)).eq(6);
    expect(award.getScore(otherPlayer)).eq(1);
  });

  it('Comatible with Hostile Takeover', () => {
    const award = new LunarMagnate();
    MoonExpansion.addTile(player, 'm01', {tileType: TileType.MOON_MINE});

    expect(award.getScore(player)).eq(1);
    expect(award.getScore(otherPlayer)).eq(0);

    MoonExpansion.spaces(game, undefined, {ownedBy: player})[0].coOwner = otherPlayer;

    expect(award.getScore(player)).eq(1);
    expect(award.getScore(otherPlayer)).eq(1);
  });
});
