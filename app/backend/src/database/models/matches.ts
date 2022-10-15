
import { INTEGER, BOOLEAN } from 'sequelize';
import { Model } from 'sequelize/types';
import db from '.';

class Matche extends Model {
  public id!: number;
  public home_team!: number;
  public home_team_goals!: number;
  public away_team!: number;
  public away_team_goals!: number;
  public in_progress!: boolean;

}

Matche.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  home_team: {
    type: INTEGER,
    allowNull: false,
  },
  home_team_goals: {
    type: INTEGER,
    allowNull: false,
  },
  away_team: {
    type: INTEGER,
    allowNull: false,
  },
  away_team_goals: {
    type: INTEGER,
    allowNull: false,
  },
  in_progress: {
    type: BOOLEAN,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
})