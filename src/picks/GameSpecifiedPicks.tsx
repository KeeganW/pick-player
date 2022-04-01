import { PlayerRankedPicks, RANDOM } from 'src/util/Common'

/**
 * In game picks, primary is that which the game rules recommend,
 * secondary is the curated suggestion if primary is random.
 */
export const GAME_PICKS = {
  'Among Nobles': {
    primary: 'The player who shows the highest unique number when all players flip a number on their hand',
  },
  'Atlantic Star': {
    primary: 'The player who most recently went on a cruise',
  },
  Azul: {
    primary: 'The player who most recently visited Portugal',
  },
  'Betrayal at House on the Hill': {
    primary: "The player whose character's birthday is soonest",
  },
  Bruges: {
    primary: 'The player who most recently visited Belgium',
  },
  Carcassonne: {
    primary: 'The youngest player',
  },
  'Cards Against Humanity': {
    primary: 'The player who most recently went number 2',
  },
  Cartagena: {
    primary: 'The player who looks most like a pirate',
  },
  Catan: {
    primary: 'The oldest player',
  },
  'Champions of Midgard': {
    primary: 'The player who most recently earned glory in battle',
  },
  Chrononauts: {
    primary: 'The player who can most accurately guess the current time',
  },
  Chwasi: {
    primary: 'Just use the app!',
  },
  'Corporate America': {
    primary: 'The player who has the most cash on them',
  },
  Coup: {
    primary: 'The player who won the last game',
  },
  Courtier: {
    primary: 'The player who most recently had a birthday',
  },
  Dixit: {
    primary: 'The first person to be ready to play the game',
  },
  Dweebies: {
    primary: 'The player with the least amount hair',
  },
  Eclipse: {
    primary: 'The youngest player',
  },
  'Fearsome Floors': {
    primary: 'The player who looks most like a monster',
  },
  'Fire & Axe: A Viking Saga': {
    primary: 'He who has the longest hair',
  },
  Flowerpower: {
    primary: 'The player with the most colorful clothing',
  },
  Gloom: {
    primary: 'The player who has had the worst day',
  },
  'Goldrush City': {
    primary: 'The player most in need of a shave',
  },
  Hamburgum: {
    primary: 'The player who most recently visited Hamburg. If there is a tie, the player who most recently ate a hamburger',
  },
  Hanabi: {
    primary: 'The player with the most colorful clothing',
  },
  'Harry Potter Casting Stone': {
    primary: RANDOM,
    secondary: 'Let her or she who is without sin cast the first stone',
  },
  Helios: {
    primary: 'The player who has visited the most continents',
  },
  'Inspector Moss: House Arrest': {
    primary: 'The player whose character is the youngest',
  },
  Jambo: {
    primary: 'The player who has the most change in their wallet',
  },
  'La Città': {
    primary: 'The player who most recently visited Italy',
  },
  'Love Letter': {
    primary: 'The player who most recently went on a date',
  },
  'Mamma Mia!': {
    primary: 'The player who is the hungriest',
  },
  Munchkin: {
    primary: 'The players roll a dice and then negotiate over the result of the roll',
  },
  Nantucket: {
    primary: 'The player who knows the rules better',
  },
  'Nothing Personal': {
    primary: 'The player who looks most like a gangster',
  },
  'Nuclear War': {
    primary: 'The player who owns the copy of the game you are playing with',
  },
  Pandemic: {
    primary: 'The player who was most recently sick',
  },
  "Pandora's Box": {
    primary: 'The player who opened the game box',
  },
  Photosynthesis: {
    primary: 'The youngest player',
  },
  'Pirate Fluxx': {
    primary: 'The player who looks most like a pirate',
  },
  'Police Precinct': {
    primary: 'The player who most recently had contact with law enforcement',
  },
  Skyline: {
    primary: 'The player who was most recently in a skyscraper',
  },
  'Small World': {
    primary: 'The player with the most pointed ears',
  },
  'Smash Up': {
    primary: 'The player who got up earliest on the day of gameplay',
  },
  'Snow Tails': {
    primary: 'The player with the huskiest voice',
  },
  Splendor: {
    primary: 'The youngest player',
  },
  'Super Motherload': {
    primary: 'The player who most recently dug a hole',
  },
  Takenoko: {
    primary: 'The oldest player',
  },
  'Terra Mystica': {
    primary: 'The player who most recently has dug a planting bed in their garden',
  },
  'Terror in Meeple City': {
    primary: 'The player who can make the best roar',
  },
  'The Bridges of Shangri-La': {
    primary: 'The player who most recently reached the peak of Mount Everest using nothing but blue and white checkered stilts carved from the wood of a Mammoth tree. If there is a tie, the wisest player',
  },
  'The Great Heartland Hauling Co': {
    primary: 'The player with either the best mustache or the longest hair is the picked player. If one player has a very nice mustache and the other player has the longest hair, settle the issue with an arm-wrestling match',
  },
  'The Grizzled': {
    primary: 'The hairiest player',
  },
  'The Pillars of the Earth': {
    primary: 'The player who last visited a cathedral',
  },
  'The Reef': {
    primary: 'The player who can hold their breath the longest',
  },
  'Ticket to Ride': {
    primary: 'The player with the most travel experience',
  },
  'Tiny Towns': {
    primary: 'The player who most recently built something',
  },
  'Twilight Imperium': {
    primary: RANDOM,
    secondary: 'The player who has last been in space. In case of a tie, the player who last studied another planet or solar system',
  },
  "Tzolk'in: The Mayan Calendar": {
    primary: 'The player who most recently sacrificed something. In case of a tie, the player who volunteers for the next sacrifice',
  },
  Wingspan: {
    primary: RANDOM,
    secondary: 'The player who last went bird watching',
  },
} as { [name: string]: PlayerRankedPicks }
