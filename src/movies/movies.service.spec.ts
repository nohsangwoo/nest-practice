import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { O_TRUNC } from 'constants';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  // service로 Moviservice에 접근가능 ex) service.getAll()
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // create Testing
  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'test for nohs movie',
        genres: ['test2'],
        year: 2222,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  // getAll Testing
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      // 배열을 반환하는지 안하는지 테스트함
      expect(result).toBeInstanceOf(Array);
    });
  });

  // getOne Testing
  describe('getOne', () => {
    // Movie의 데이터가 없으면 에러가 날꺼같아서 create로 객체를 임시로 만들어줌
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });

      // 위에서만든 OBJ를 기준으로 getOne을 실행후(인자값은 1로 줌)
      const movie = service.getOne(1);

      // 이때 movie의 값은 정의돼야하고===(값이 존재해야하고)
      expect(movie).toBeDefined();
      // movie.id의 값은 1이어야 한다
      expect(movie.id).toEqual(1);
    });

    it('should throw empty error', () => {
      // getOne을 실행할때 없는Id를 호출하면 NotFoundException이 잘 동작하는지 확인하기 위한 작업
      // 또한 해당 메세지가 정상적으로 잘 출력하는지 확인(의도한 에러 내용인지 확인)
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movies data is empty');
      }
    });

    it('should throw 404 error', () => {
      // getOne을 실행할때 없는Id를 호출하면 NotFoundException이 잘 동작하는지 확인하기 위한 작업
      // 또한 해당 메세지가 정상적으로 잘 출력하는지 확인(의도한 에러 내용인지 확인)
      try {
        service.create({
          title: 'Test2 Movie',
          genres: ['test2'],
          year: 2222,
        });
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('not found Movie with ID : 999');
      }
    });

    // deleteOne Testing
    describe('deleteOne', () => {
      it('delete a movie', () => {
        service.create({
          title: 'Test2 Movie',
          genres: ['test2'],
          year: 2222,
        });

        const beforeDelete = service.getAll().length;
        service.deleteOne(1);
        const afterDelete = service.getAll().length;

        // 삭제한 이후의 getAll값의 길이는 삭제 이전의 getAll의 값보다 적어야 한다
        expect(afterDelete).toBeLessThan(beforeDelete);
      });
      it('should return a empty', () => {
        try {
          service.deleteOne(9999);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect(e.message).toEqual('Movies data is empty');
        }
      });

      it('should return a 404', () => {
        try {
          service.create({
            title: 'Test2 Movie',
            genres: ['test2'],
            year: 2222,
          });
          service.deleteOne(9999);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect(e.message).toEqual('not found Movie with ID : 9999');
        }
      });
    });
  });
});
