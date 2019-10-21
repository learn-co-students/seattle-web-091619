class ResponsesController < ApplicationController

    before_action :define_question, :define_response

    def new
      @number_correct = 0
    end

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
      # byebug
        # @number_correct = 0
        if !session[:number_correct]
            session[:number_correct] = 0
        end
        # else
        #   session[:number_correct] = 0
        #   @number_correct = session[:number_correct]
        # end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            session[:number_correct] = session[:number_correct].to_i + 1
            flash[:answer_status] =  "Correct"
        else
            flash[:answer_status] =  "Incorrect"
        end
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

    # private
    # def total
    #   cookies[:number_correct] = number_correct +1
    # end

end
